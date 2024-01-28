import { FaPlus } from "react-icons/fa";
import { Formulario } from "../../../../components/Form";
import { BGInput } from "../../../../components/BG Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useOrder } from "../../../../context/OrderContext";
import { SelectEnum } from "../../../../components/SelectEnum";
import "./style.css";
import { BGTextArea } from "../../../../components/TextArea";
import { Button } from "../../../../components/Button";
import { useEffect, useState } from "react";
import { Prueba } from "../Order";
import { usePartner } from "../../../../context/PartnerContext";
import { BGSelect } from "../../../../components/BGSelect";

const OrderInfoSchema = yup.object().shape({
  partner: yup.string().required(),
  way_to_pay: yup.string().notRequired(),
  installments: yup.string().notRequired(),
  logistic: yup.string().notRequired(),
  status: yup.string().notRequired(),
  freight: yup
    .number()
    .transform((val) => (isNaN(val) ? 0 : val))
    .notRequired(),
  comments: yup.string().notRequired(),
});

interface OrderInfoProps {
  informacion: Prueba;
  setInformacion: (data: Prueba) => void;
}

/* interface Prueba {
  partner: string;
  way_to_pay: string;
  installments: string;
  logistic: string;
  status: string;
  freight?: number;
  comments: string;
} */

export const OrderInfo = ({ informacion, setInformacion }: OrderInfoProps) => {
  const { logisticsList, statusList, waysList } = useOrder();
  const { PartnersList, partners } = usePartner();

  useEffect(() => {
    PartnersList();
  }, []);

  const {
    // formState,
    formState: { errors },
    register,
    // reset,
    handleSubmit,
  } = useForm<Prueba>({
    resolver: yupResolver(OrderInfoSchema),
  });

  const sender = (data: Prueba) => {
    setInformacion(data);
  };

  console.log(informacion);

  return (
    <div id="order_info" className="purchase_request_info">
      Información de la Orden de Compra
      <Formulario onSubmit={handleSubmit(sender)} clase="maggie">
        {/* <div className="field-column"> */}
        <div className="fields">
          <div className="field-50 abajo">
            <BGSelect
              register={register}
              name="partner"
              error={errors.partner?.message}
              label="Proveedor"
              enlace="Nuevo Proveedor"
              ruta="/partners"
            >
              {partners &&
                partners.map((partner, index) => (
                  <option key={index} value={partner.partnerId}>
                    {partner.fantasyName}
                  </option>
                ))}
            </BGSelect>
          </div>
          <div className="field-20 abajo">
            <SelectEnum
              label="Forma de Pagamento"
              name="way_to_pay"
              register={register}
              options={waysList}
            />
          </div>
          <div className="field-20 abajo">
            <BGInput
              register={register}
              name="installments"
              error={errors.installments?.message}
              label="Condiciones"
              placeholder="Condiciones de Pagamento"
            />
          </div>
        </div>
        <div className="fields">
          <div className="field-30 abajo">
            <SelectEnum
              label="Logistica"
              name="logisticMode"
              register={register}
              options={logisticsList}
            />
          </div>
          <div className="field-30 abajo">
            <SelectEnum
              label="Status"
              name="status"
              register={register}
              options={statusList}
            />
          </div>
          <div className="field-30 abajo">
            <BGInput
              register={register}
              name="freight"
              error={errors.freight?.message}
              label="Frete"
              placeholder="0,00"
            />
          </div>
        </div>
        <div className="fields grande">
          <div className="field-75 abajo grande">
            <BGTextArea
              register={register}
              name="comments"
              label="Comentarios"
              placeholder="Comentarios"
            />
          </div>
          <div className="field-20 abajo grande">
            <div className="refill"></div>
            <Button type="submit">
              Confirmar
              {/* <FaPlus /> */}
            </Button>
          </div>
        </div>
        {/* </div> */}
      </Formulario>
    </div>
  );
};
