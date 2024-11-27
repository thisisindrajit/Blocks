import { FC } from "react";

const TitleHolder: FC<{ boldText?: string; lightText?: string }> = ({
  boldText,
  lightText,
}) => {
  return (
    <div className="text-2xl">
      <span className="font-bold">{boldText}</span> {lightText}
    </div>
  );
};

export default TitleHolder;
