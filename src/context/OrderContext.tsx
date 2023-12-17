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
  purchaseOrders: Order[];
  OrdersList: () => void;
  PurchaseOrdersList: () => void;
}

export enum OrderStatus {
  APPROVED = "Aprovada",
  PENDING = "Pendente",
  DELAYED = "Atrasada",
  DENIED = "Reprovada",
  RECEIVED = "Recebida",
  DELIVERED = "Entregue",
  DISPATCHED = "Enviada",
  RETURNED = "Devolvida",
  REJECTED = "Rejeitada",
}

export enum LogisticMode {
  DELIVERY = "Entrega",
  RECEIVE = "Retirada",
}

export enum WayToPay {
  BILLED = "Faturado",
  CARD = "Cartão",
  CASH = "Dinheiro",
}

export const OrderContext = createContext<OrderContextData>(
  {} as OrderContextData
);

const useOrder = () => useContext(OrderContext);

const OrderProvider = ({ children }: OrderProviderProps) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [purchaseOrders, setPurchaseOrders] = useState<Order[]>([]);

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

  const PurchaseOrdersList = async () => {
    await api
      .get(
        `/orders/purchase-orders` /* , {
        headers: {
          authorization: `Bearer ${token}`,
        },
      } */
      )
      .then((response) => {
        setPurchaseOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    OrdersList();
    PurchaseOrdersList();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orders,
        purchaseOrders,
        OrdersList,
        PurchaseOrdersList,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { useOrder, OrderProvider };
