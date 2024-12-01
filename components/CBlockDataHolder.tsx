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
      const height = `${(isModal ? document.documentElement.clientHeight - 40 : document.documentElement.clientHeight) - blockDataHolderEl.offsetTop - 24}px`;
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
          "w-1/5 sticky top-0 flex flex-col justify-between",
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
          Go back
        </Button>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2 p-3 cursor-pointer border border-rose-400/50 text-rose-400 font-medium">
            <Heart className="h-4 w-4" />
            <span>123K+</span>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center justify-center gap-2 p-4 cursor-pointer border border-transparent bg-teal-400/[0.15] text-teal-400 font-medium w-[50%]">
              <Bookmark className="h-4 w-4 fill-teal-400" />
            </div>
            <div className="flex items-center justify-center gap-2 p-4 cursor-pointer border border-transparent bg-foreground/10 font-medium w-[50%]">
              <Share2 className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 flex flex-col gap-4">
        <div
          className="font-bold text-4xl/tight mb-2"
          style={{
            marginTop: `calc(-0.5 * (1.5 - 1) * 1.05em)`,
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
      </div>
      <div
        id="right-pane"
        className={cn(
          "w-2/5 flex flex-col gap-2 sticky top-0",
          rightPaneClassName
        )}
      >
        {/* <div className="font-bold text-2xl text-teal-300 uppercase">Notes</div> */}
        <Textarea
          className="resize-none text-lg/loose text-justify h-full"
          placeholder="Jot down your notes here..."
        />
        <Button variant="secondary">Save note</Button>
      </div>
    </div>
  );
};

export default CBlockDataHolder;
