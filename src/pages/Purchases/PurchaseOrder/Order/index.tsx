import { useEffect, useState } from "react";
import { OrderDetails } from "../OrderDetails";
import { OrderDetailsList } from "../OrderDetailsList";
import { OrderInfo } from "../OrderInfo";
import { ElementToBuy } from "../../../../context/ElementContext";
import { Button } from "../../../../components/Button";
import { useOrder } from "../../../../context/OrderContext";
import { Partner, usePartner } from "../../../../context/PartnerContext";

export interface Prueba {
  partner: string;
  way_to_pay: string;
  installments: string;
  logistic: string;
  status: string;
  freight?: number;
  comments: string;
}

export const Order = ({ /* isOpen, setIsOpen */ handleClick }: any) => {
  const { partners } = usePartner();
  const { OrderCreator } = useOrder();
  const [informacion, setInformacion] = useState<Prueba>({} as Prueba);
  const [elementos, setElementos] = useState<ElementToBuy[]>([]);
  const [proveedor, setProveedor] = useState({} as Partner);

  /* useEffect(() => {
    Partners();
  }, []); */
  console.log(partners);

  const enviar = () => {
    const amor = {
      partner: informacion.partner,
      wayToPay: informacion.way_to_pay,
      installments: informacion.installments,
      freight: informacion.freight,
      logistic: informacion.logistic,
      details: elementos,
    };
    OrderCreator(amor);
    handleClick();
  };

  return (
    <>
      {/* <OrderInfo informacion={informacion} setInformacion={setInformacion} /> */}
      {informacion.partner ? (
        <>
          <OrderDetails elementos={elementos} setElementos={setElementos} />
          <OrderDetailsList elementos={elementos} setElementos={setElementos} />
          <Button onClick={() => enviar()}>Envia</Button>
        </>
      ) : (
        <OrderInfo informacion={informacion} setInformacion={setInformacion} />
      )}
    </>
  );
};
