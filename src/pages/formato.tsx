import { useForm } from "react-hook-form";
import { BGInput } from "../components/BG Input";
import { Formulario } from "../components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Prueba } from "./Purchases/PurchaseOrder/Order";
import { SelectEnum } from "../components/SelectEnum";
import { useOrder } from "../context/OrderContext";
import { BGTextArea } from "../components/TextArea";
import { Button } from "../components/Button";
import { usePartner } from "../context/PartnerContext";
import { useEffect } from "react";

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

export const Formato = () => {
  const { PartnersList } = usePartner();
  const { logisticsList, statusList, waysList } = useOrder();
  const {
    // formState,
    formState: { errors },
    register,
    // reset,
    handleSubmit,
  } = useForm<Prueba>({
    resolver: yupResolver(OrderInfoSchema),
  });

  useEffect(() => {
    PartnersList();
  }, []);

  const sender = (data: Prueba) => {
    console.log(data);
  };
  return (
    <>
      <div className="board">
        board
        <div className="box centro centralizado">
          box
          <div className="field-1 izquierda">campo 1</div>
          <div className="field-1 centro">campo 2</div>
          <div className="field-1 centro">campo 3</div>
          <div className="field-1 derecha">campo 4</div>
        </div>
      </div>
      <div id="order_info" className="board">
        Información de la Orden de Compra
        <Formulario /* onSubmit={handleSubmit(sender)} clase="maggie" */>
          <div className="columna">
            <div className="fila">
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
            <div className="fila">
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
            <div className="fila">
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
    </>
  );
};
