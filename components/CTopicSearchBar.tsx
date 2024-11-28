"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { FC, ChangeEvent, FormEvent, useState } from "react";
// import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
// import { useAction, useQuery } from "convex/react";
// import { api } from "@/convex/_generated/api";
import { retryFunction } from "@/utilities/commonUtilities";
import Loader from "./Loader";
// import { fetchMutation } from "convex/nextjs";

const CTopicSearchBar: FC = () => {
  //   const { userId } = useAuth();
  //   const userByExternalId = useQuery(api.users.getUserByExternalId, {
  //     externalId: userId ?? undefined,
  //   });

  const [generatingBlock, setGeneratingBlock] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [width, setWidth] = useState(18);

  const blockGenerationErrorHandler = async () => {
    toast.error(
      <div className="text-sm/loose">
        Error while generating block for search query{" "}
        <span className="font-semibold">{searchQuery}</span>! Please try again.
      </div>,
      {
        duration: Infinity,
      }
    );
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setWidth(e.target.value.length > 18 ? e.target.value.length : 18);
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const searchInputEl = document.getElementById("search-input");

    setGeneratingBlock(true);
    searchInputEl?.blur();

    const formattedSearchQuery = searchQuery.trim();

    if (formattedSearchQuery === "") {
      setSearchQuery("");
      setGeneratingBlock(false);

      return alert("Please enter a search query!");
    }

    setSearchQuery(formattedSearchQuery);
    setWidth(formattedSearchQuery.length);

    toast.success(
      <div className="text-sm/loose text-justify font-medium">
        Your request for search query{" "}
        <span className="font-bold underline">{searchQuery}</span> has been
        queued! You will receive a notification when the AI generated block is
        available. Meanwhile you can check out trending blocks.
      </div>,
      {
        duration: Infinity,
      }
    );

    try {
      const isSuccess = await retryFunction(() => {
        // sleep for 1 min
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 60000);
        });
        // console.log("Block generation successful!");
        // return true;
      });

      if (!isSuccess) {
        await blockGenerationErrorHandler();
      }
    } catch (error) {
      console.error(
        `Some error occurred while generating block. ${error instanceof Error && error.message}`
      );
      await blockGenerationErrorHandler();
    }

    setSearchQuery("");
    setWidth(18);
    setGeneratingBlock(false);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-4 sm:gap-2 text-3xl lg:text-4xl m-auto mt-10 mb-12 lg:mb-20 font-medium">
      <span className={`${generatingBlock && "animate-pulse"} min-w-fit`}>
        {generatingBlock ? (
          "Generating block for "
        ) : (
          <div>
            I am{" "}
            <span className="bg-gradient-to-r text-foreground from-teal-500 to-teal-600">
              curious
            </span>{" "}
            about
          </div>
        )}
      </span>
      <form onSubmit={submitHandler} className="flex items-center gap-2">
        <Input
          id="search-input"
          placeholder="type in any topic"
          className={`text-3xl lg:text-4xl text-center sm:text-left px-2 py-6 lg:py-7 rounded-none outline-none border-x-0 border-t-0 border-b-2 bg-foreground/10 focus-visible:ring-0 focus-visible:ring-offset-0 text-teal-300 focus-visible:ring-transparent focus-visible:border-teal-500 focus-visible:placeholder:opacity-0 sm:focus-visible:placeholder:opacity-100 duration-200 ease-in-out max-w-[72vw] sm:max-w-[42vw] md:max-w-[48vw] ${generatingBlock ? "border-teal-300" : "border-muted-foreground"}`}
          style={{
            width: width + "ch",
          }}
          maxLength={100}
          value={searchQuery}
          onChange={(e) => changeHandler(e)}
          autoComplete="off"
          readOnly={generatingBlock}
        />
        {generatingBlock ? (
          <div className=" h-12 w-12 lg:h-14 lg:w-14 [&_svg]:size-5 lg:[&_svg]:size-6 border-2 border-foreground flex items-center justify-center">
            <Loader noText />
          </div>
        ) : (
          <Button
            size="icon"
            type="submit"
            className="text-base h-12 w-12 lg:h-14 lg:w-14 lg:[&_svg]:size-6"
          >
            <ArrowRight />
          </Button>
        )}
      </form>
    </div>
  );
};

export default CTopicSearchBar;
