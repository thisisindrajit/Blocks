import CBlockDataHolder from "@/components/CBlockDataHolder";
import TopBar from "@/components/TopBar";
import { Fragment } from "react";

const BlockPage = () => {
  return (
    <Fragment>
      <TopBar />
      <CBlockDataHolder leftPaneClassName="top-28" rightPaneClassName="top-28" />
    </Fragment>
  );
};

export default BlockPage;
