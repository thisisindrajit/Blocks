import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { FC, Fragment } from "react";

const LandingPage: FC = () => {
  return (
    <Fragment>
      <TopBar />
      <div className="m-auto my-16 flex flex-col gap-4 lg:gap-6 items-center">
        {/* Motto */}
        <div className="text-5xl/tight lg:text-6xl/tight font-medium text-center">
          Turning{" "}
          <span className="bg-gradient-to-r text-foreground from-teal-500 to-teal-600">
            curiosity
          </span>{" "}
          into{" "}
          <span className="bg-gradient-to-r text-transparent from-teal-300 to-teal-400 bg-clip-text">
            clarity.
          </span>
        </div>
        {/* Get started */}
        <Button
          variant="outline"
          className="text-lg lg:text-xl h-12"
        >
          Start exploring!
        </Button>
      </div>
      <div className="flex flex-col">
        <div className="text-2xl underline underline-offset-[10px]">
          <span className="font-bold">Trending</span> Blocks
        </div>
      </div>
    </Fragment>
  );
}

export default LandingPage;
