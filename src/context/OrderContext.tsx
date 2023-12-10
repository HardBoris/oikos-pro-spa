import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { localApi as api } from "../services/api";

interface OrderProviderProps {
  children: ReactNode;
}

export interface Order {
  orderId?: string;
  orderDate: string;
  orderUpdateDate: string;
  orderNumber: string;
  partner?: string;
  logistic?: string;
  status?: string;
  comments?: string;
}

interface OrderContextData {
  orders: Order[];
  OrdersList: () => void;
}

export const OrderContext = createContext<OrderContextData>(
  {} as OrderContextData
);

const useOrder = () => useContext(OrderContext);

const OrderProvider = ({ children }: OrderProviderProps) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const OrdersList = async () => {
    await api
      .get(
        `/orders` /* , {
        headers: {
          authorization: `Bearer ${token}`,
        },
      } */
      )
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    OrdersList();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orders,
        OrdersList,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { useOrder, OrderProvider };
