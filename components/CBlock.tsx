"use client";

import {
  randomLightColorGenerator,
  statsCountShortener,
} from "@/utilities/commonUtilities";
import { FC, memo, useLayoutEffect, useRef } from "react";
import { Separator } from "./ui/separator";
import { Bookmark, Heart, Share2 } from "lucide-react";

const CBlock: FC<{
  title: string;
  tldr: string;
  didYouKnow: string;
  isLiked: boolean;
  isSaved: boolean;
  likesCount: number;
}> = ({ title, tldr, didYouKnow, isLiked, isSaved, likesCount }) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const color = randomLightColorGenerator();

  useLayoutEffect(() => {
    const block = blockRef.current;

    block?.addEventListener("mouseenter", () => {
      block.style.borderColor = `hsla(${color}, 1)`;
    });

    block?.addEventListener("mouseleave", () => {
      block.style.borderColor = `hsla(${color}, 0.15)`;
    });

    return () => {
      block?.removeEventListener("mouseenter", () => {
        block.style.borderColor = `hsla(${color}, 1)`;
      });
      block?.removeEventListener("mouseleave", () => {
        block.style.borderColor = `hsla(${color}, 0.15)`;
      });
    };
  }, [color]);

  return (
    <div
      ref={blockRef}
      className={`min-w-full flex flex-col gap-3 p-4 border-2 border-transparent transition-all cursor-pointer`}
      style={{
        backgroundColor: `hsla(${color}, 0.15)`,
        borderColor: `hsla(${color}, 0.15)`,
      }}
    >
      {/* Title, requestor details and type */}
      <div className="flex flex-col gap-1.5 font-medium">
        <span
          className="text-2xl/10 md:text-3xl/10 font-bold"
          style={{ color: `hsla(${color}, 1)` }}
        >
          {title}
        </span>
        <span className="text-sm text-foreground/75">
          Requested 16/11/2024 by Indrajit
        </span>
        {/* <div className="bg-foreground/20 backdrop-blur-xl w-fit py-1 px-3 uppercase my-2 font-bold">
          ELI5
        </div> */}
      </div>
      <Separator
        style={{
          backgroundColor: `hsla(${color}, 0.5)`,
        }}
      />
      {/* TLDR */}
      <div className="text-base/loose md:text-lg/loose text-justify">
        {tldr}
      </div>
      {/* Did you know */}
      <div
        className="py-3 px-4 flex flex-col gap-1.5 font-medium"
        style={{
          backgroundColor: `hsla(${color}, 0.15)`,
          color: `hsla(${color}, 1)`,
        }}
      >
        <span className="uppercase text-foreground font-bold">
          Did you know?
        </span>
        <p className="leading-loose text-justify">{didYouKnow}</p>
      </div>
      {/* Social icons */}
      <div className="flex gap-1.5 mt-4 font-medium">
        <div
          className="flex items-center justify-center gap-1.5 text-sm py-3 px-4 cursor-pointer border-2"
          style={{
            borderColor: isLiked ? `transparent` : `hsla(${color}, 0.15)`,
            backgroundColor: isLiked ? `hsla(${color}, 0.15)` : `transparent`,
            color: `hsla(${color}, 1)`,
          }}
        >
          {isLiked ? (
            <Heart
              className="h-4 w-4"
              style={{
                fill: `hsla(${color}, 1)`,
              }}
            />
          ) : (
            <Heart className="h-4 w-4" />
          )}
          {statsCountShortener(likesCount)}
        </div>
        <div
          className="flex items-center justify-center gap-1.5 text-sm py-3 px-4 cursor-pointer border-2"
          style={{
            borderColor: isSaved ? `transparent` : `hsla(${color}, 0.15)`,
            backgroundColor: isSaved ? `hsla(${color}, 0.15)` : `transparent`,
            color: `hsla(${color}, 1)`,
          }}
        >
          {isSaved ? (
            <Bookmark
              className="h-4 w-4"
              style={{
                fill: `hsla(${color}, 1)`,
              }}
            />
          ) : (
            <Bookmark className="h-4 w-4" />
          )}
          {isSaved ? "Saved" : "Save"}
        </div>
        <div
          className="flex items-center justify-center gap-1.5 text-sm p-4 aspect-square cursor-pointer"
          style={{
            backgroundColor: `hsla(${color}, 0.15)`,
            color: `hsla(${color}, 1)`,
          }}
        >
          <Share2 className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default memo(CBlock);
