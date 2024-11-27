import CMasonryHolder from "@/components/CMasonryHolder";
import TitleHolder from "@/components/TitleHolder";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <TitleHolder boldText="New and trending" lightText="Blocks" />
      <CMasonryHolder />
    </div>
  );
};

export default DashboardPage;
