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
    </Fragment>
  );
};

export default UserLayout;
