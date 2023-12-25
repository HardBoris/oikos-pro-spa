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
import { useState } from "react";
import { Prueba } from "../Order";

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
  // const [informacion, setInformacion] = useState<Prueba>({} as Prueba);

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
    console.log(informacion);
  };

  return (
    <div id="order_info" className="purchase_request_info">
      Información de la Orden de Compra
      <Formulario onSubmit={handleSubmit(sender)} clase="maggie">
        <div className="field-column">
          <div className="field-row">
            <div className="field-50 field-left">
              <BGInput
                register={register}
                name="partner"
                error={errors.partner?.message}
                label="Proveedor"
                placeholder="Proveedor"
              />
            </div>
            <div className="field-20 field-center">
              <SelectEnum
                label="Forma de Pagamento"
                name="way_to_pay"
                register={register}
                options={waysList}
              />
            </div>
            <div className="field-20 field-right">
              <BGInput
                register={register}
                name="installments"
                error={errors.installments?.message}
                label="Condiciones"
                placeholder="Condiciones de Pagamento"
              />
            </div>
          </div>
          <div className="field-row">
            <div className="field-30 field-left">
              <SelectEnum
                label="Logistica"
                name="logisticMode"
                register={register}
                options={logisticsList}
              />
            </div>
            <div className="field-30 field-center">
              <SelectEnum
                label="Status"
                name="status"
                register={register}
                options={statusList}
              />
            </div>
            <div className="field-30 field-right">
              <BGInput
                register={register}
                name="freight"
                error={errors.freight?.message}
                label="Frete"
                placeholder="0,00"
              />
            </div>
          </div>
          <div className="field-row">
            <div className="field-75 field-left">
              <BGTextArea
                register={register}
                name="comments"
                label="Comentarios"
                placeholder="Comentarios"
              />
            </div>
            <div className="btn_confirm">
              <Button type="submit">
                Confirmar
                {/* <FaPlus /> */}
              </Button>
            </div>
          </div>
        </div>
      </Formulario>
    </div>
  );
};
