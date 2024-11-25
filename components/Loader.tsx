// import Image from "next/image";
// import SVGIMG from "@/public/loader.svg";
import { FC } from "react";

const Loader: FC<{ text?: string }> = ({ text = "Loading" }) => {
  return (
    // <div className="flex gap-4 items-center justify-center text-xl font-medium m-auto">
    //   <div className="relative h-12 w-12">
    //     <Image src={SVGIMG} alt="Loading icon" fill />
    //   </div>
    //   {text}...
    // </div>
    <div className="flex gap-4 items-center justify-center text-xl font-medium m-auto">
      <div className="spinner animated fadeIn relative h-6 w-6">
        <svg viewBox="0 0 40 40">
          <polygon points="0 0 0 40 40 40 40 0" className="rect"></polygon>
        </svg>
      </div>
      {text}...
    </div>
  );
};

export default Loader;
