import CBlockDataHolder from "@/components/CBlockDataHolder";
import CModal from "./CModal";

const BlockModal = () => {
  return (
    <CModal className="p-4 sm:p-5">
      <CBlockDataHolder isModal />
    </CModal>
  );
};

export default BlockModal;
