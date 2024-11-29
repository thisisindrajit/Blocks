import CBlockDataHolder from "@/components/CBlockDataHolder";
import TopBar from "@/components/TopBar";
import { Fragment } from "react";

const BlockPage = () => {
  return (
    <Fragment>
      <TopBar />
      <CBlockDataHolder />
    </Fragment>
  );
};

export default BlockPage;
