import { OrderDetails } from "../OrderDetails";
import { OrderDetailsList } from "../OrderDetailsList";
import { OrderInfo } from "../OrderInfo";

export const Order = () => {
  return (
    <>
      <OrderInfo />
      <OrderDetails />
      <OrderDetailsList />
    </>
  );
};
