import { PurchaseRequest } from "../../../../../context/PurchaseRequisitionContext";

interface ThisRequisitionProps {
  solicitud: PurchaseRequest;
  estaSolicitud: (id: string) => void;
}
export const ThisRequisition = ({
  solicitud,
  estaSolicitud,
}: ThisRequisitionProps) => {
  const fake = {
    numero: 5,
    fecha: "08/12/2023",
    detalles: [
      {
        elemento: "elemento 1",
        cantidad: 5,
        unidad: "kg",
      },
      {
        elemento: "elemento 2",
        cantidad: 5,
        unidad: "kg",
      },
      {
        elemento: "elemento 3",
        cantidad: 5,
        unidad: "kg",
      },
    ],
  };

  console.log(solicitud);

  return (
    <>
      <div className="titulos">
        <div>número: {solicitud.purchaseRequestId}</div>
        <div>fecha: {solicitud.purchaseRequestDate}</div>
      </div>
      {solicitud.details &&
        solicitud.details.map((item, index) => (
          <div key={index} className="request-row">
            <div>{item.element?.element}</div>
            <div>{item.quantity}</div>
            <div>{item.measurement}</div>
          </div>
        ))}
    </>
  );
};
