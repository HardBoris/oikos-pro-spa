import { useEffect, useState } from "react";
import { OrderDetails } from "../OrderDetails";
import { OrderDetailsList } from "../OrderDetailsList";
import { OrderInfo } from "../OrderInfo";

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
  const [muestra, setMuestra] = useState(false);

  /* useEffect(() => {
    setMuestra(!muestra);
  }, [informacion]); */

  console.log(informacion.partner);

  return (
    <>
      <OrderInfo informacion={informacion} setInformacion={setInformacion} />
      {informacion.partner ? (
        <div>
          <OrderDetails />
          <OrderDetailsList />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
