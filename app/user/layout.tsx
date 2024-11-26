import CBottomBar from "@/components/CBottomBar";
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
      {children}
      <CBottomBar />
    </Fragment>
  );
};

export default UserLayout;
