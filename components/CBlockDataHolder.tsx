"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft, Bookmark, Heart, Share2 } from "lucide-react";
import CBlock from "./CBlock";
import { DUMMY_DATA } from "@/constants/common";
import { FC, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

const CBlockDataHolder: FC<{
  leftPaneClassName?: string;
  rightPaneClassName?: string;
  isModal?: boolean;
}> = ({ leftPaneClassName, rightPaneClassName, isModal = false }) => {
  const router = useRouter();

  const onDismiss = () => {
    router.back();
  };

  const updateHeightOfLeftAndRightPane = useCallback(() => {
    const blockDataHolderEl = document.getElementById("block-data-holder");
    const leftPaneEl = document.getElementById("left-pane");
    const rightPaneEl = document.getElementById("right-pane");

    if (blockDataHolderEl && leftPaneEl && rightPaneEl) {
      const height = `${(isModal ? document.documentElement.clientHeight - 30 : document.documentElement.clientHeight) - blockDataHolderEl.offsetTop - 23}px`;
      leftPaneEl.setAttribute("style", `height: ${height}`);
      rightPaneEl.setAttribute("style", `height: ${height}`);
    }
  }, [isModal]);

  useEffect(() => {
    updateHeightOfLeftAndRightPane();

    window.addEventListener("resize", updateHeightOfLeftAndRightPane);

    return () => {
      window.removeEventListener("resize", updateHeightOfLeftAndRightPane);
    };
  }, [updateHeightOfLeftAndRightPane]);

  return (
    <div id="block-data-holder" className="flex gap-6">
      <div
        id="left-pane"
        className={cn(
          "hidden w-1/5 sticky top-0 xl:flex flex-col justify-between",
          leftPaneClassName
        )}
      >
        <Button
          size="lg"
          variant="outline"
          className="w-fit"
          onClick={onDismiss}
        >
          <ArrowLeft />
          Back
        </Button>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2 p-3 cursor-pointer border-2 border-red-400/25 bg-red-400/10 text-red-400 font-medium">
            <Heart className="h-4 w-4 fill-red-400" />
            123K+
          </div>
          <div className="flex gap-2">
            <div className="flex items-center justify-center gap-2 p-3 cursor-pointer border-2 border-orange-400/25 text-orange-400 font-medium w-[50%]">
              <Bookmark className="h-4 w-4" />
              Save
            </div>
            <div className="flex items-center justify-center gap-2 p-3 cursor-pointer border-2 border-teal-400/25 bg-teal-400/10 text-teal-400 font-medium w-[50%]">
              <Share2 className="h-4 w-4" />
              Share
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full lg:w-3/5 xl:w-2/5 flex flex-col gap-4 lg:mt-0 ${!isModal && "mt-4"}`}
      >
        <div
          className="font-bold text-2xl/snug md:text-3xl/tight mb-0 xl:text-4xl/tight xl:mb-2"
          style={{
            marginTop: `calc(-0.5 * (1.5 - 1) * 1em)`,
          }}
        >
          What is the difference between you and me?
        </div>
        <CBlock
          title={DUMMY_DATA[0].title}
          tldr={DUMMY_DATA[0].tldr}
          didYouKnow={DUMMY_DATA[0].didYouKnow}
          likesCount={DUMMY_DATA[0].likeCount}
          isLiked={DUMMY_DATA[0].isLiked}
          isSaved={DUMMY_DATA[0].isSaved}
        />
        <CBlock
          title={DUMMY_DATA[0].title}
          tldr={DUMMY_DATA[0].tldr}
          didYouKnow={DUMMY_DATA[0].didYouKnow}
          likesCount={DUMMY_DATA[0].likeCount}
          isLiked={DUMMY_DATA[0].isLiked}
          isSaved={DUMMY_DATA[0].isSaved}
        />
        <CBlock
          title={DUMMY_DATA[0].title}
          tldr={DUMMY_DATA[0].tldr}
          didYouKnow={DUMMY_DATA[0].didYouKnow}
          likesCount={DUMMY_DATA[0].likeCount}
          isLiked={DUMMY_DATA[0].isLiked}
          isSaved={DUMMY_DATA[0].isSaved}
        />
        <CBlock
          title={DUMMY_DATA[0].title}
          tldr={DUMMY_DATA[0].tldr}
          didYouKnow={DUMMY_DATA[0].didYouKnow}
          likesCount={DUMMY_DATA[0].likeCount}
          isLiked={DUMMY_DATA[0].isLiked}
          isSaved={DUMMY_DATA[0].isSaved}
        />
        <div
          className={`grid xl:hidden grid-cols-4 sticky m-auto w-full shadow-[0_40px_20px_rgba(0,_0,_0,_1)] ${!isModal ? "bottom-4 lg:bottom-6" : "bottom-0"}`}
        >
          <div
            className="flex items-center justify-center gap-2 p-3 cursor-pointer bg-foreground text-background font-medium text-sm md:text-base"
            onClick={onDismiss}
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:block">Back</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 cursor-pointer bg-red-500 font-medium text-sm md:text-base">
            <Heart className="h-4 w-4" />
            <span className="hidden md:block">123K+</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 cursor-pointer bg-orange-500 font-medium text-sm md:text-base">
            <Bookmark className="h-4 w-4 fill-foreground" />
            <span className="hidden md:block">Saved</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 cursor-pointer bg-teal-500 font-medium text-sm md:text-base">
            <Share2 className="h-4 w-4" />
            <span className="hidden md:block">Share</span>
          </div>
        </div>
      </div>
      <div
        id="right-pane"
        className={cn(
          "hidden w-2/5 lg:flex flex-col gap-2 sticky top-0",
          rightPaneClassName
        )}
      >
        {/* <div className="font-bold text-2xl text-teal-300 uppercase">Notes</div> */}
        <Textarea
          className="resize-none text-lg/loose text-justify h-full font-medium"
          placeholder="Jot down your notes here..."
        />
        <Button variant="secondary">Save note</Button>
      </div>
    </div>
  );
};

export default CBlockDataHolder;
