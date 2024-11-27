import CMasonryHolder from "@/components/CMasonryHolder";
import TitleHolder from "@/components/TitleHolder";

const SavedBlocksPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <TitleHolder boldText="Saved" lightText="Blocks" />
      <CMasonryHolder />
    </div>
  );
};

export default SavedBlocksPage;
