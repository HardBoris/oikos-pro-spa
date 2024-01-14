import { useEffect, useState } from "react";
import { OrderDetails } from "../OrderDetails";
import { OrderDetailsList } from "../OrderDetailsList";
import { OrderInfo } from "../OrderInfo";
import { ElementToBuy } from "../../../../context/ElementContext";
import { Button } from "../../../../components/Button";

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
  const [informacion, setInformacion] = useState<Prueba>({} as Prueba);
  const [elementos, setElementos] = useState<ElementToBuy[]>([]);

  /* useEffect(() => {
    setMuestra(!muestra);
  }, [informacion]); */

  const enviar = () => {
    console.log(informacion);
    console.log(elementos);
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
