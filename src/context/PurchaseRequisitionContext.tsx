import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { localApi as api } from "../services/api";
import { Detail } from "./DetailContext";
import { ElementToBuy } from "./ElementContext";

interface PurchaseRequestProviderProps {
  children: ReactNode;
}

export interface PurchaseRequest {
  purchaseRequestId?: string;
  purchaseRequestDate?: string;
  details: ElementToBuy[];
}

interface PurchaseRequestContextData {
  solicitudes: PurchaseRequest[];
  PurchaseRequestList: () => void;
  PurchaseRequestCreator: (data: PurchaseRequest) => void;
}

export const PurchaseRequestContext = createContext<PurchaseRequestContextData>(
  {} as PurchaseRequestContextData
);

const usePurchaseRequest = () => useContext(PurchaseRequestContext);

const PurchaseRequestProvider = ({
  children,
}: PurchaseRequestProviderProps) => {
  const [solicitudes, setSolicitudes] = useState<PurchaseRequest[]>([]);
  const PurchaseRequestList = async () => {
    await api
      .get(
        `/purchase-requests` /* , {
        headers: { authorization: `Bearer ${token}` },
      } */
      )
      .then((response) => {
        setSolicitudes(response.data);
        // console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    PurchaseRequestList();
  }, []);

  /* const prequestLoader = async () => {
    await api
      .get(`/${company.companyId}/prequests/:prequestId`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setPrequest(response.data);
      })
      .catch((error) => console.log(error));
  }; */

  const PurchaseRequestCreator = async (data: PurchaseRequest) => {
    await api
      .post(
        `/purchase-requests/register`,
        data /* , {
        headers: { authorization: `Bearer ${token}` },
      } */
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  /* const prequestEditor = async (data: PRequest) => {
    await api
      .patch(`/${company}/prequests/${data.prequestId}`, data, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response) => setPrequest(response.data))
      .catch((error) => console.log(error));
  }; */

  /* const prequestEliminator = async (id: string) => {
    await api
      .delete(`/${company}/prequests/${id}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }; */

  return (
    <PurchaseRequestContext.Provider
      value={{
        solicitudes,
        PurchaseRequestList,
        PurchaseRequestCreator,
      }}
    >
      {children}
    </PurchaseRequestContext.Provider>
  );
};

export { usePurchaseRequest, PurchaseRequestProvider };
