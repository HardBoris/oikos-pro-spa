import { useEffect, useState } from "react";
import { OrderDetails } from "../OrderDetails";
import { OrderDetailsList } from "../OrderDetailsList";
import { OrderInfo } from "../OrderInfo";
import { ElementToBuy } from "../../../../context/ElementContext";

export interface Prueba {
  partner: string;
  way_to_pay: string;
  installments: string;
  logistic: string;
  status: string;
  freight?: number;
  comments: string;
}

export const Order = () => {
  const [informacion, setInformacion] = useState<Prueba>({} as Prueba);
  const [elementos, setElementos] = useState<ElementToBuy[]>([]);

  /* useEffect(() => {
    setMuestra(!muestra);
  }, [informacion]); */

  console.log(informacion.partner);

  return (
    <>
      {/* <OrderInfo informacion={informacion} setInformacion={setInformacion} /> */}
      {informacion.partner ? (
        <>
          <OrderDetails elementos={elementos} setElementos={setElementos} />
          <OrderDetailsList elementos={elementos} setElementos={setElementos} />
        </>
      ) : (
        <OrderInfo informacion={informacion} setInformacion={setInformacion} />
      )}
    </>
  );
};
