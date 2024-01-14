import { useState } from "react";
import { Button } from "../../../components/Button";
import Modal from "../../../components/Modal";
import { PurchaseOrderList } from "./OrderList";
import { usePurchase } from "../../../context/PurchaseContext";
import { OrderInfo } from "./OrderInfo";
import { Order } from "./Order";

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
        <Order
          /* isOpen={isOpen} setIsOpen={setIsOpen} */ handleClick={handleModal}
        />
      </Modal>
    </div>
  );
};
