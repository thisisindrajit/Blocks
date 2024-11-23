import CMasonryHolder from "@/components/CMasonryHolder";
import TopBar from "@/components/TopBar";
import { Fragment } from "react";

const DashboardPage = () => {
  return (
    <Fragment>
      <TopBar />
      <div className="w-full">
        <CMasonryHolder />
      </div>
    </Fragment>
  );
};

export default DashboardPage;
