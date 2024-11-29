import CMasonryHolder from "@/components/CMasonryHolder";
import TitleHolder from "@/components/TitleHolder";

const SavedPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <TitleHolder words={[
          { word: "Saved", type: "bold" },
          { word: "Blocks", type: "normal" },
        ]} />
      <CMasonryHolder />
    </div>
  );
};

export default SavedPage;
