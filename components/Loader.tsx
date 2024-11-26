import { FC } from "react";

const Loader: FC<{ text?: string; noText?: boolean }> = ({
  text = "Loading",
  noText = false,
}) => {
  return (
    <div className="flex gap-4 items-center justify-center text-xl font-medium m-auto">
      <div className="spinner animated fadeIn relative h-6 w-6">
        <svg viewBox="0 0 40 40">
          <polygon points="0 0 0 40 40 40 40 0" className="rect"></polygon>
        </svg>
      </div>
      {!noText && `${text}...}`}
    </div>
  );
};

export default Loader;
