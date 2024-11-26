import CBottomBar from "@/components/CBottomBar";
import CMasonryHolder from "@/components/CMasonryHolder";
import CTopicSearchBar from "@/components/CTopicSearchBar";
import TopBar from "@/components/TopBar";
import { Fragment } from "react";

const DashboardPage = () => {
  return (
    <Fragment>
      <TopBar />
      <CTopicSearchBar />
      <CMasonryHolder />
      <CBottomBar activeIndex={0} />
    </Fragment>
  );
};

export default DashboardPage;
