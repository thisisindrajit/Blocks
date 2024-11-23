import CMasonryHolder from "@/components/CMasonryHolder";
import TopBar from "@/components/TopBar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { FC, Fragment } from "react";

const LandingPage: FC = async () => {
  const { userId }: { userId: string | null } = await auth();

  if (userId) {
    redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/user/dashboard`);
  }

  return (
    <Fragment>
      <TopBar />
      <div className="m-auto my-20 text-5xl/tight lg:text-6xl/tight font-medium text-center">
        {/* Motto */}
        Turning{" "}
        <span className="bg-gradient-to-r text-foreground from-teal-500 to-teal-600">
          curiosity
        </span>{" "}
        into{" "}
        <span className="bg-gradient-to-r text-transparent from-teal-300 to-teal-400 bg-clip-text">
          clarity.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-2xl">
          <span className="font-bold">Trending</span> Blocks
        </div>
        <CMasonryHolder />
      </div>
    </Fragment>
  );
};

export default LandingPage;
