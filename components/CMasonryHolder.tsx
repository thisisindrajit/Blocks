"use client";

import dynamic from "next/dynamic";
import Block from "./CBlock";
import { Suspense } from "react";

const Masonry = dynamic(() => import("react-layout-masonry"), {
  ssr: false, // This ensures the component is not SSR'd
});

const CMasonryHolder = () => {
  const titles = [
    "Meenakshi amman temple",
    "Photosynthesis",
    "Elon Musk",
    "Java",
    "Deloitte",
    "Ceramic",
  ];
  const heights = [
    "h-96",
    "h-[36rem]",
    "h-72",
    "h-[32rem]",
    "h-[28rem]",
    "h-[28rem]",
  ];

  return (
    <Suspense fallback={<div>Loading layout...</div>}>
      <Masonry columns={{ 640: 1, 768: 2, 1280: 3 }} gap={12}>
        {titles.map((title, index) => {
          return <Block key={index} title={title} height={heights[index]} />;
        })}
      </Masonry>
    </Suspense>
  );
};

export default CMasonryHolder;
