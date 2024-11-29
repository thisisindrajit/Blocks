import { FC } from "react";

const TitleHolder: FC<{
  words: { word: string; type: "bold" | "normal" }[];
}> = ({ words }) => {
  return (
    <div className="text-2xl">
      {words.map(({ word, type }, index) => {
        return (
          <span
            key={index}
            className={`${type === "bold" ? "font-bold" : "font-normal"}`}
          >
            {`${word}${index !== words.length - 1 ? " " : ""}`}
          </span>
        );
      })}
    </div>
  );
};

export default TitleHolder;
