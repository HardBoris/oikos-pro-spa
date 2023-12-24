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

const OrderInfoSchema = yup.object().shape({
  partner: yup.string().required(),
  way_to_pay: yup.string().notRequired(),
  installments: yup.string().notRequired(),
  logistic: yup.string().notRequired(),
  status: yup.string().notRequired(),
  freight: yup.number().notRequired(),
  comments: yup.string().notRequired(),
});

/* interface OrderInfoProps {
  informacion: string;
  setInformacion: (data: string) => void;
} */

interface Prueba {
  partner: string;
  way_to_pay: string;
  installments: string;
  logistic: string;
  status: string;
  freight: number;
  comments: string;
}

export const OrderInfo = () => {
  const { logisticsList, statusList } = useOrder();

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
    console.log(data);
  };

  return (
    <div id="order_info" className="purchase_request_info">
      Información de la Orden de Compra
      <Formulario onSubmit={handleSubmit(sender)} clase="maggie">
        <div className="field-column">
          <div className="field-row">
            <div className="individual-detail element-dt">
              <BGInput
                register={register}
                name="partner"
                error={errors.partner?.message}
                label="Proveedor"
                placeholder="Proveedor"
              />
            </div>
            <div className="individual-detail qty-dt">
              <BGInput
                register={register}
                name="way_to_pay"
                error={errors.way_to_pay?.message}
                label="Forma de Pagamento"
                placeholder="Forma de Pagamento"
              />
            </div>
            <div className="individual-detail qty-dt">
              <BGInput
                register={register}
                name="installments"
                error={errors.installments?.message}
                label="Condiciones de Pagamento"
                placeholder="Condiciones de Pagamento"
              />
            </div>
          </div>
          <div className="field-row">
            <div className="individual-detail qty-dt">
              <SelectEnum
                label="Logistica"
                name="logisticMode"
                register={register}
                options={logisticsList}
              />
            </div>
            <div className="individual-detail qty-dt">
              <SelectEnum
                label="Status"
                name="status"
                register={register}
                options={statusList}
              />
            </div>
            <div className="individual-detail qty-dt">
              <BGInput
                register={register}
                name="freight"
                error={errors.freight?.message}
                label="Frete"
                placeholder="Frete"
              />
            </div>
          </div>
          <div className="field-row">
            <div className="individual-detail qty-dt">
              <BGTextArea
                register={register}
                name="comments"
                label="Comentarios"
                placeholder="Comentarios"
              />
            </div>
            <div className="detail-action">
              <button className="detail-btn" type="submit">
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </Formulario>
    </div>
  );
};
