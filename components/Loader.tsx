import { FC } from "react";

const Loader: FC<{ text?: string; noText?: boolean }> = ({
  text = "Loading",
  noText = false,
}) => {
  return (
    // set it in center using translate
    <div className="flex gap-4 items-center justify-center text-xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit">
      <div className="spinner animated fadeIn relative h-6 w-6">
        <svg viewBox="0 0 40 40">
          <polygon points="0 0 0 40 40 40 40 0" className="rect"></polygon>
        </svg>
      </div>
      {!noText && `${text}...`}
    </div>
  );
};

export default Loader;
