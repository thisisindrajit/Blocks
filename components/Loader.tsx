import { cn } from "@/lib/utils";
import { FC } from "react";

const Loader: FC<{
  text?: string;
  noText?: boolean;
  className?: string;
  svgClassName?: string;
}> = ({ text = "Loading", noText = false, className, svgClassName }) => {
  return (
    // set it in center using translate
    <div
      className={cn(
        "flex gap-4 items-center justify-center text-xl font-medium m-auto",
        className
      )}
    >
      <div className="spinner animated fadeIn relative h-6 w-6">
        <svg viewBox="0 0 40 40">
          <polygon
            points="0 0 0 40 40 40 40 0"
            className={cn("rect stroke-foreground", svgClassName)}
          ></polygon>
        </svg>
      </div>
      {!noText && `${text}...`}
    </div>
  );
};

export default Loader;
