import { useState } from "react";
import Modal from "../../components/Modal";
import { Order } from "../Purchases/PurchaseOrder/Order";

export const Partners = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      Partners
      <button type="button" onClick={() => handleModal()}>
        abre
      </button>
      <Modal isOpen={isOpen} setIsOpen={handleModal}>
        <Order
          /* isOpen={isOpen} setIsOpen={setIsOpen} */ handleClick={handleModal}
        />
      </Modal>
    </>
  );
};
