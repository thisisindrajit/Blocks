"use client";

import dynamic from "next/dynamic";
import Block from "./CBlock";
import { Suspense } from "react";
import Link from "next/link";
import Loader from "./Loader";
import { DUMMY_DATA } from "@/constants/common";

const Masonry = dynamic(() => import("react-layout-masonry"), {
  ssr: false, // This ensures the component is not SSR'd
});

const CMasonryHolder = () => {
  return (
    <div className="w-full">
      <Suspense fallback={<Loader text="Loading layout" />}>
        <Masonry columns={{ 640: 1, 1024: 2, 1280: 3 }} gap={18}>
          {DUMMY_DATA.map((data, index) => {
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
    </div>
  );
};

export default CMasonryHolder;
