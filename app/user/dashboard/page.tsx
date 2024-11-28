"use client";

import CMasonryHolder from "@/components/CMasonryHolder";
import TitleHolder from "@/components/TitleHolder";
import { useEffect } from "react";
import { useScrollData } from "scroll-data-hook";

const DashboardPage = () => {
  const { position } = useScrollData();

  useEffect(() => {
    const newAndTrendingScrollPosition = sessionStorage.getItem(
      "newAndTrendingScrollPosition"
    );

    if (newAndTrendingScrollPosition) {
      window.scrollTo(0, parseInt(newAndTrendingScrollPosition));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "newAndTrendingScrollPosition",
      position.y.toString()
    );
  }, [position.y]);

  return (
    <div className="flex flex-col gap-4">
      <TitleHolder boldText="New and trending" lightText="Blocks" />
      <CMasonryHolder />
    </div>
  );
};

export default DashboardPage;
