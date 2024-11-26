import Loader from "@/components/Loader";
import TopBar from "@/components/TopBar";
import { Fragment } from "react";

const BlockPage = () => {
  return (
    <Fragment>
      <TopBar />
      <Loader text="Loading block" />
    </Fragment>
  );
};

export default BlockPage;
