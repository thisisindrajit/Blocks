import Image from "next/image";
import SVGIMG from "@/public/loader.svg";
import { FC } from "react";

const Loader: FC<{ text?: string }> = ({ text = "Loading" }) => {
  return (
    <div className="flex gap-4 items-center justify-center text-xl font-medium m-auto">
      <div className="relative h-12 w-12">
        <Image src={SVGIMG} alt="Loading icon" fill />
      </div>
      {text}...
    </div>
  );
};

export default Loader;
