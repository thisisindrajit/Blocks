"use client";

import CMasonryHolder from "@/components/CMasonryHolder";
import TitleHolder from "@/components/TitleHolder";
import { useEffect } from "react";
import { useScrollData } from "scroll-data-hook";

const DashboardPage = () => {
  const { position } = useScrollData();

  useEffect(() => {
    const trendingPageScrollPosition = sessionStorage.getItem(
      "trendingPageScrollPosition"
    );

    if (trendingPageScrollPosition) {
      window.scrollTo(0, parseInt(trendingPageScrollPosition));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("trendingPageScrollPosition", position.y.toString());
  }, [position.y]);

  return (
    <div className="flex flex-col gap-4">
      <TitleHolder
        words={[
          { word: "Trending", type: "bold" },
          { word: "Blocks", type: "normal" },
        ]}
      />
      <CMasonryHolder />
    </div>
  );
};

export default DashboardPage;
