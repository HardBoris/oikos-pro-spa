import { usePurchaseRequest } from "../../../../context/PurchaseRequisitionContext";
import "./RequisitionsList.style.css";

export const RequisitionsList = () => {
  const { solicitudes } = usePurchaseRequest();
  return (
    <>
      <div className="faja-de-titulos"></div>
      <div className="tabla-de-solicitudes">
        {solicitudes &&
          solicitudes.map((item, index) => (
            <div key={index}>
              <div>{item.purchaseRequestId}</div>
              <div>{item.purchaseRequestDate}</div>
              <div>converter</div>
            </div>
          ))}
      </div>
    </>
  );
};
