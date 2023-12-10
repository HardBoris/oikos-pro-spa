import { FaPlus, FaTrash } from "react-icons/fa";
import { PurchaseRequest } from "../../../../../context/PurchaseRequisitionContext";
import "./ThisRequisition.style.css";

interface ThisRequisitionProps {
  solicitud: PurchaseRequest;
  // estaSolicitud: (id: string) => void;
}
export const ThisRequisition = ({
  solicitud,
}: // estaSolicitud,
ThisRequisitionProps) => {
  console.log(solicitud);

  return (
    <div id="this_requisition">
      {/* <div className="info_title">
        <div>número: {solicitud.purchaseRequestId}</div>
        <div>fecha: {solicitud.purchaseRequestDate}</div>
      </div> */}
      {solicitud.details &&
        solicitud.details.map((item, index) => (
          <div key={index} className="info_row">
            <div className="info_data">
              <div className="info_cell element">{item.element?.element}</div>
              <div className="info_cell">{item.quantity}</div>
              <div className="info_cell">{item.measurement}</div>
            </div>
            <div className="info_action">
              <div className="info_btn" role="button">
                <FaTrash />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
