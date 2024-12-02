import CBottomBar from "@/components/CBottomBar";
import CTopicSearchBar from "@/components/CTopicSearchBar";
import TopBar from "@/components/TopBar";
import { FC, Fragment } from "react";

const UserLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <Fragment>
      <TopBar />
      <CTopicSearchBar />
      {children}
      <CBottomBar />
      <div className="mb-8" />
    </Fragment>
  );
};

export default UserLayout;
