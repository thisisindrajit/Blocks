import CMasonryHolder from "@/components/CMasonryHolder";
import CTopicSearchBar from "@/components/CTopicSearchBar";
import { Fragment } from "react";

const DashboardPage = () => {
  return (
    <Fragment>
      <CTopicSearchBar />
      <CMasonryHolder />
    </Fragment>
  );
};

export default DashboardPage;
