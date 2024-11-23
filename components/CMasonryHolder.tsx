"use client";

import dynamic from "next/dynamic";
import Block from "./CBlock";
import { Suspense } from "react";
import Link from "next/link";

const Masonry = dynamic(() => import("react-layout-masonry"), {
  ssr: false, // This ensures the component is not SSR'd
});

const CMasonryHolder = () => {
  const dummyData = [
    {
      title: "Meenakshi Amman Temple",
      tldr: "A magnificent Hindu temple located in Madurai, Tamil Nadu, India, dedicated to Goddess Meenakshi and Lord Shiva, renowned for its stunning Dravidian architecture with intricate sculptural work and massive gopurams (temple towers).",
      didYouKnow:
        "The temple complex covers over 14 acres and has 14 gateway towers, with the southern tower standing at an impressive 52 meters high, making it one of the tallest temple towers in India.",
      likeCount: 42567,
      isLiked: true,
      isSaved: false,
    },
    {
      title: "Photosynthesis",
      tldr: "A complex biological process by which plants, algae, and some bacteria convert light energy into chemical energy, producing oxygen and glucose from carbon dioxide and water, fundamentally supporting life on Earth.",
      didYouKnow:
        "A single leaf can contain around half a million chloroplasts, and these microscopic structures process approximately 1 million molecules of carbon dioxide per minute during photosynthesis.",
      likeCount: 38294,
      isLiked: true,
      isSaved: true,
    },
    {
      title: "Elon Musk",
      tldr: "A technology entrepreneur and billionaire known for founding or leading companies like Tesla, SpaceX, Neuralink, and X (formerly Twitter), recognized for ambitious technological innovations and controversial public persona.",
      didYouKnow:
        "Musk was not a founder of Tesla but joined very early, becoming the largest shareholder and taking an active role in product development before becoming CEO.",
      likeCount: 56732,
      isLiked: false,
      isSaved: true,
    },
    {
      title: "Java",
      tldr: "A popular, versatile object-oriented programming language developed by Sun Microsystems in 1995, known for its 'Write Once, Run Anywhere' principle, widely used in enterprise software, Android development, and web applications.",
      didYouKnow:
        "The language was originally named 'Oak' by its creator James Gosling, inspired by an oak tree outside his office, before being renamed to Java after a type of coffee.",
      likeCount: 45123,
      isLiked: true,
      isSaved: false,
    },
    {
      title: "Deloitte",
      tldr: "A multinational professional services network headquartered in London, offering audit, consulting, financial advisory, risk management, tax, and legal services to clients across various industries worldwide.",
      didYouKnow:
        "Deloitte is one of the 'Big Four' accounting firms and has been in operation for over 175 years, serving 90% of Fortune 500 companies.",
      likeCount: 29876,
      isLiked: false,
      isSaved: false,
    },
    {
      title: "Ceramic",
      tldr: "An inorganic, non-metallic solid material made from clay and other natural materials, shaped and then hardened by heat, used in everything from pottery and construction to advanced technological applications.",
      didYouKnow:
        "Some advanced ceramics are so strong and heat-resistant that they're used in aerospace applications, including heat shields for spacecraft and components in jet engines.",
      likeCount: 33456,
      isLiked: true,
      isSaved: true,
    },
    {
      title: "Aurora Borealis",
      tldr: "A spectacular natural light display in Earth's polar regions, caused by charged particles from the sun colliding with atmospheric gases, creating mesmerizing dancing lights in the sky.",
      didYouKnow:
        "The Sami people of northern Scandinavia traditionally believed the Northern Lights were the souls of their ancestors dancing in the sky.",
      likeCount: 67543,
      isLiked: true,
      isSaved: false,
    },
    {
      title: "Quantum Computing",
      tldr: "A revolutionary computing technology that uses quantum mechanics principles to process information, potentially solving complex problems exponentially faster than classical computers.",
      didYouKnow:
        "A quantum computer can perform calculations in seconds that would take a classical supercomputer thousands of years to complete.",
      likeCount: 54321,
      isLiked: true,
      isSaved: true,
    },
    {
      title: "Machu Picchu",
      tldr: "An ancient Incan city located high in the Andes Mountains of Peru, built in the 15th century and later abandoned, now a UNESCO World Heritage Site and iconic archaeological wonder.",
      didYouKnow:
        "The site was unknown to the Spanish during their conquest and was only revealed to the wider world in 1911 by American historian Hiram Bingham.",
      likeCount: 72456,
      isLiked: true,
      isSaved: false,
    },
    {
      title: "Blockchain",
      tldr: "A decentralized, distributed digital ledger technology that records transactions across multiple computers, ensuring transparency, security, and resistance to modification.",
      didYouKnow:
        "The first blockchain was conceptualized in 2008 by an anonymous person or group using the pseudonym Satoshi Nakamoto.",
      likeCount: 59876,
      isLiked: false,
      isSaved: true,
    },
    {
      title: "Bioluminescence",
      tldr: "A natural phenomenon where living organisms produce and emit light through a chemical reaction, commonly observed in marine creatures like fireflies, jellyfish, and deep-sea organisms.",
      didYouKnow:
        "Some species of fireflies can synchronize their light signals across entire forests, creating a stunning, coordinated light show.",
      likeCount: 48932,
      isLiked: true,
      isSaved: false,
    },
    {
      title: "Robotics",
      tldr: "An interdisciplinary field of engineering focused on designing, constructing, and programming robots to perform tasks autonomously or with human interaction.",
      didYouKnow:
        "The word 'robot' originates from the Czech word 'robota', meaning forced labor or drudgery, first used in a 1920 science fiction play.",
      likeCount: 62145,
      isLiked: true,
      isSaved: true,
    },
    {
      title: "Coral Reefs",
      tldr: "Complex marine ecosystems formed by colonies of tiny animals called coral polyps, supporting incredible biodiversity and often called the 'rainforests of the sea'.",
      didYouKnow:
        "The Great Barrier Reef is the world's largest coral reef system, stretching over 2,300 kilometers and visible from space.",
      likeCount: 55678,
      isLiked: false,
      isSaved: false,
    },
    {
      title: "Nanotechnology",
      tldr: "A field of technology manipulating matter at the atomic and molecular scale, with potential applications in medicine, electronics, and materials science.",
      didYouKnow:
        "A single nanometer is about 80,000 times smaller than the width of a human hair.",
      likeCount: 51234,
      isLiked: true,
      isSaved: true,
    },
    {
      title: "Ayahuasca",
      tldr: "A traditional spiritual medicine and psychoactive brew used by indigenous Amazonian tribes in spiritual and healing ceremonies, made from specific plants containing DMT.",
      didYouKnow:
        "Some indigenous Amazonian cultures believe ayahuasca allows communication with plant and animal spirits.",
      likeCount: 39876,
      isLiked: false,
      isSaved: false,
    },
    {
      title: "Dark Matter",
      tldr: "A hypothetical form of matter that does not interact with electromagnetic radiation, making it invisible but believed to comprise about 27% of the universe's total mass-energy.",
      didYouKnow:
        "Scientists infer dark matter's existence through its gravitational effects on visible matter, radiation, and the structure of the universe.",
      likeCount: 64321,
      isLiked: true,
      isSaved: true,
    },
  ];

  return (
    <Suspense fallback={<div>Loading layout...</div>}>
      <Masonry columns={{ 640: 1, 1024: 2, 1280: 3 }} gap={18}>
        {dummyData.map((data, index) => {
          return (
            <Link href={`/block/${index}`} key={index}>
              <Block
                key={index}
                title={data.title}
                tldr={data.tldr}
                didYouKnow={data.didYouKnow}
                likesCount={data.likeCount}
                isLiked={data.isLiked}
                isSaved={data.isSaved}
              />
            </Link>
          );
        })}
      </Masonry>
    </Suspense>
  );
};

export default CMasonryHolder;
