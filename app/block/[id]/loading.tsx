import Loader from "@/components/Loader";

const BlockLoading = () => {
  return (
    <Loader
      text="Loading block"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default BlockLoading;
