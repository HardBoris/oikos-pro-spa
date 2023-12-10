import { useState } from "react";
import { Button } from "../../../components/Button";
import Modal from "../../../components/Modal";
import { PurchaseOrderList } from "./OrderList";

export const PurchaseOrder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <section>
        <div className="purchase-info">
          <Button onClick={() => handleModal()}>nuevo</Button>
        </div>
        <PurchaseOrderList />
      </section>
      <Modal isOpen={isOpen} setIsOpen={handleModal}>
        Hola
      </Modal>
    </div>
  );
};
