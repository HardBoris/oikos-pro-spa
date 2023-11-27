import { ReactNode, createContext, useContext } from "react";
import { localApi as api } from "../services/api";
import { Detail } from "./DetailContext";

interface PurchaseRequestProviderProps {
  children: ReactNode;
}

export interface PurchaseRequest {
  prequestId?: string;
  listDate: string;
  details: Detail[];
}

interface PurchaseRequestContextData {
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
  // const [solicitud, setSolicitud] = useState()
  const PurchaseRequestList = async () => {
    await api
      .get(
        `/purchase-requests` /* , {
        headers: { authorization: `Bearer ${token}` },
      } */
      )
      .then((response) => {
        // setSolicitud(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

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
        PurchaseRequestList,
        PurchaseRequestCreator,
      }}
    >
      {children}
    </PurchaseRequestContext.Provider>
  );
};

export { usePurchaseRequest, PurchaseRequestProvider };
