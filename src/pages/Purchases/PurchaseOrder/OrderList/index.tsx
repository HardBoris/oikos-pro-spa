import { useOrder } from "../../../../context/OrderContext";
import "./OrderList.style.css";

export const PurchaseOrderList = () => {
  const { purchaseOrders } = useOrder();

  console.log(purchaseOrders);

  return (
    <div className="tabla-de-ordenes">
      <div className="faja-de-titulos">Lista de Ordenes de Compra</div>
      {purchaseOrders &&
        purchaseOrders.map((item, index) => (
          <div key={index} className="request-row">
            <div>{item.orderId}</div>
          </div>
        ))}
    </div>
  );
};
