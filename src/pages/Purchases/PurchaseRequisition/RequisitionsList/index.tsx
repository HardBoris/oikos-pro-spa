import { useState } from "react";
import Modal from "../../../../components/Modal";
import {
  PurchaseRequest,
  usePurchaseRequest,
} from "../../../../context/PurchaseRequisitionContext";
import "./RequisitionsList.style.css";
import { PRInfo } from "../PRInfo";
import { ThisRequisition } from "./ThisRequisition";
import { Container } from "../../../../components/Container";

export const RequisitionsList = () => {
  const { solicitudes } = usePurchaseRequest();
  const [abrir, setAbrir] = useState(false);
  const [solicitud, setSolicitud] = useState<PurchaseRequest>(
    {} as PurchaseRequest
  );

  const handleModal = () => {
    setAbrir(!abrir);
  };

  const estaSolicitud = (id: string | undefined) => {
    setSolicitud(
      solicitudes.filter((item) => item.purchaseRequestId === id)[0]
    );
    setAbrir(true);
  };

  return (
    <>
      <div className="tabla-de-solicitudes">
        <div className="faja-de-titulos">
          <div className="titulos">
            <div className="id_titulo">id</div>
            <div className="date_titulo">fecha</div>
            <div className="btn_titulo"></div>
          </div>
        </div>
        {solicitudes &&
          solicitudes.map((item, index) => (
            <details>
              <summary
                key={index}
                className="request-row"
                onClick={() =>
                  estaSolicitud(solicitudes[index].purchaseRequestId)
                }
              >
                <div>{item.purchaseRequestId}</div>
                <div>{item.purchaseRequestDate}</div>
                <div>converter</div>
              </summary>
              <ThisRequisition solicitud={solicitud} />
            </details>
          ))}
      </div>
      {/* <Modal isOpen={abrir} setIsOpen={handleModal}>
        <ThisRequisition solicitud={solicitud} />
      </Modal> */}
    </>
  );
};
