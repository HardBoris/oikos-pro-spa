import { useOrder } from "../../../../context/OrderContext";
import "./OrderList.style.css";

export const PurchaseOrderList = () => {
  const { orders } = useOrder();

  console.log(orders);

  return (
    <div className="tabla-de-ordenes">
      <div className="faja-de-titulos">Lista de Ordenes de Compra</div>
      {orders &&
        orders.map((item, index) => (
          <div key={index} className="request-row">
            <div>{item.orderId}</div>
          </div>
        ))}
    </div>
  );
};
