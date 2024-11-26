import CBottomBar from "@/components/CBottomBar";
import CMasonryHolder from "@/components/CMasonryHolder";
import TopBar from "@/components/TopBar";
import { Fragment } from "react";

const SavedBlocksPage = () => {
  return (
    <Fragment>
      <TopBar />
      <CMasonryHolder />
      <CBottomBar activeIndex={1} />
    </Fragment>
  );
};

export default SavedBlocksPage;
