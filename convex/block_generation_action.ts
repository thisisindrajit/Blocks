import { v } from "convex/values";
import { action } from "./_generated/server";
import { api } from "./_generated/api";
import {
  createEmbeddingFromQuery,
  fetchHtmlContentAndVectorize,
  normalizeChunks,
  normalizeData,
  searchForSources,
} from "../utilities/commonUtilities";
import Groq from "groq-sdk";
// import { TGeneratedBlockData } from "../types/TGeneratedBlockData";
// import { Id } from "./_generated/dataModel";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateBlock = action({
  args: {
    searchQuery: v.optional(v.string()),
    externalUserId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { searchQuery, externalUserId } = args;

    if (!searchQuery || !externalUserId) {
      console.error("searchQuery or externalUserId not provided!");
      return false;
    }

    // Get user details based on external user Id
    const user = await ctx.runQuery(api.users.getUserByExternalId, {
      externalId: externalUserId,
    });

    if (!user) {
      console.error(`User with externalUserId ${externalUserId} not found!`);
      return false;
    }

    // Start timer to get the time taken for the block generation
    const startTime = new Date().getTime();

    // STEP 1: Get topic based on the search query
    const topicGenerationByLlm = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            process.env.TOPIC_GENERATION_PROMPT ??
            `Create a concise search query for the given input that can be used in a search engine API to retrieve general information about the input.
            The query should:
            1.Be no longer than 8-10 words.
            2.Include the most relevant keywords related to the topic.
            3.Include the keyword 'introduction', 'wiki' or 'overview' if applicable to focus on general information.
            4.Do not add any quotation marks or extra words.
            Return only the search query string, without any additional explanation or formatting. If you don't have any information about the input, just return NO INFORMATION.`,
        },
        { role: "user", content: searchQuery },
      ],
      model: process.env.TOPIC_GENERATION_MODEL ?? "llama3-70b-8192",
    });

    let topic = {
      generatedByLlm: false,
      data: searchQuery,
    };

    const generatedTopic = topicGenerationByLlm.choices[0]?.message?.content;

    if (generatedTopic) {
      topic = { generatedByLlm: true, data: generatedTopic };
    }

    console.log("Generated topic: ", topic);

    // If no information is found by topic generator, then create an entry in the notifications table
    if (topic.generatedByLlm && topic.data.toLowerCase() === "no information") {
      await ctx.runMutation(api.notifications.createNotification, {
        notification: searchQuery,
        notification_creator: undefined,
        notification_receiver: user._id,
        type: "no information", // fetching notification type for no information
      });

      return false;
    }

    // STEP 2: Use search API to get search results and retrieve similar chunks of text by vectorizing the normalized results
    const formattedTopic = topic.data.replaceAll('"', ""); // Remove any quotation marks from the topic

    // Get search results
    const searchResults = await searchForSources(formattedTopic);

    // Normalize search results
    const normalizedData = await normalizeData(searchResults);

    // Vectorize the content and return all similar chunks
    const allSimilarChunks = await Promise.all(
      normalizedData.map(
        (item: { title: string; description: string; link: string }) =>
          fetchHtmlContentAndVectorize(searchQuery, item)
      )
    );

    if (!allSimilarChunks || allSimilarChunks.length === 0) {
      console.error("No similar chunks found!");

      await ctx.runMutation(api.notifications.createNotification, {
        notification: searchQuery,
        notification_creator: undefined,
        notification_receiver: user._id,
        type: "error", // fetching notification type for error
      });

      return false;
    }

    const similarTextChunksAndReferences = {
      similarTextChunks: allSimilarChunks,
      references: normalizedData,
    };

    // STEP 3: Use topic and similar chunks to generate a block
    const normalizedChunks =
      !similarTextChunksAndReferences.similarTextChunks ||
      similarTextChunksAndReferences.similarTextChunks.length === 0
        ? ""
        : normalizeChunks(similarTextChunksAndReferences.similarTextChunks);

    console.log("Normalized chunks: ", normalizedChunks);

    const blockGenerationByLlm = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Here is my topic - ${searchQuery}. ${
            process.env.BLOCK_GENERATION_PROMPT ?? ``
          }`,
        },
        {
          role: "user",
          content:
            normalizedChunks.length > 0
              ? `Here are the top results for the given input from a similarity search. Use them if relevant information is available. Do not use incomplete sentences and rephrase as required - ${normalizedChunks}`
              : "",
        },
      ],
      model: process.env.BLOCK_GENERATION_MODEL ?? "llama3-70b-8192",
      response_format: { type: "json_object" },
    });

    const generatedBlock = blockGenerationByLlm.choices[0]?.message?.content;

    if (!generatedBlock || generatedBlock === "{}") {
      await ctx.runMutation(api.notifications.createNotification, {
        notification: searchQuery,
        notification_creator: undefined,
        notification_receiver: user._id,
        type: "error", // fetching notification type for error
      });

      return false;
    }

    // Get all required data from the generated block
    // const data = JSON.parse(generatedBlock) as TGeneratedBlockData;
    const data = JSON.parse(generatedBlock);

    // End the time taken for the block generation
    const endTime = new Date().getTime();

    // const createdBlockId = await ctx.runMutation(api.blocks.createBlock, {
    //   title: searchQuery,
    //   likes_count: 0,
    //   requested_by: user._id,
    //   requestor_name: user.firstName || "Blocks user",
    //   model_used: `${EModel.Llama} | ${process.env.BLOCK_GENERATION_MODEL} | ${(endTime - startTime) / 1000} second(s)`, // Add the model used for block generation and time taken in seconds for generation
    //   topic_generated: topic.generatedByLlm ? topic.data : undefined,
    //   data: {
    //     what: data.what,
    //     why: data.why,
    //     when: data.when,
    //     where: data.where,
    //     how: data.how,
    //     amazingfacts: data.amazingfacts ?? [],
    //   },
    //   references: similarTextChunksAndReferences?.references,
    // });

    // await ctx.runMutation(api.notifications.createNotification, {
    //   notification: `${searchQuery}|block/${createdBlockId}`,
    //   notification_creator: undefined,
    //   notification_receiver: user._id,
    //   type: "generated block", // fetching notification type for generated block
    // });

    return true;
  },
});
