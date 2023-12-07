import { usePurchaseRequest } from "../../../../context/PurchaseRequisitionContext";
import "./RequisitionsList.style.css";

export const RequisitionsList = () => {
  const { solicitudes } = usePurchaseRequest();
  return (
    <>
      <div className="faja-de-titulos">
        <div className="titulos">
          <div className="id_titulo">id</div>
          <div className="date_titulo">fecha</div>
          <div className="btn_titulo"></div>
        </div>
      </div>
      <div className="tabla-de-solicitudes">
        {solicitudes &&
          solicitudes.map((item, index) => (
            <div key={index} className="request-row">
              <div>{item.purchaseRequestId}</div>
              <div>{item.purchaseRequestDate}</div>
              <div>converter</div>
            </div>
          ))}
      </div>
    </>
  );
};
