import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { localApi as api } from "../services/api";
import { Detail } from "./DetailContext";
import { ElementToBuy } from "./ElementContext";
import { Partner } from "./PartnerContext";

interface OrderProviderProps {
  children: ReactNode;
}

export interface Order {
  orderId?: string;
  orderDate: string;
  orderUpdateDate: string;
  orderNumber: string;
  partner?: Partner;
  logistic?: string;
  status?: string;
  comments?: string;
}

export interface PurchaseOrderData {
  partner: string;
  wayToPay: string;
  installments: string;
  freight: number | undefined;
  logistic: string;
  details: ElementToBuy[];
}

interface OrderContextData {
  orders: Order[];
  purchaseOrders: Order[];
  logisticsList: string[];
  statusList: string[];
  waysList: string[];
  OrderCreator: (data: PurchaseOrderData) => void;
  OrdersList: () => void;
  PurchaseOrdersList: () => void;
  LogisticsList: () => void;
  StatusList: () => void;
  WaysList: () => void;
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
  const [logisticsList, setLogisticsList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [waysList, setWaysList] = useState([]);

  const OrderCreator = async (data: PurchaseOrderData) => {
    await api
      .post("/orders/purchase-orders/register", data)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

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

  const LogisticsList = () => {
    api
      .get("orders/logistics-list")
      .then((response) => setLogisticsList(response.data))
      .catch((error) => console.log(error));
  };

  const StatusList = () => {
    api
      .get("orders/status-list")
      .then((response) => setStatusList(response.data))
      .catch((error) => console.log(error));
  };

  const WaysList = () => {
    api
      .get("orders/ways-list")
      .then((response) => setWaysList(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    OrdersList();
    PurchaseOrdersList();
    LogisticsList();
    StatusList();
    WaysList();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orders,
        purchaseOrders,
        logisticsList,
        statusList,
        waysList,
        OrderCreator,
        OrdersList,
        PurchaseOrdersList,
        LogisticsList,
        StatusList,
        WaysList,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { useOrder, OrderProvider };
