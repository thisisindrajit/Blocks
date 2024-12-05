import CBlockDataHolder from "@/components/CBlockDataHolder";
import CModal from "./CModal";

const BlockModal = () => {
  return (
    <CModal>
      <CBlockDataHolder isModal />
    </CModal>
  );
};

export default BlockModal;
