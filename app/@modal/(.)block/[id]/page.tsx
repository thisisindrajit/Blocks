import CBlockDataHolder from "@/components/CBlockDataHolder";
import CModal from "./CModal";

const BlockModal = () => {
  return (
    <CModal className="p-6">
      <CBlockDataHolder isModal />
    </CModal>
  );
};

export default BlockModal;
