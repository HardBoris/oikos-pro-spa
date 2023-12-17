import { OrderDetailsList } from "../OrderDetailsList";
import { OrderDetails } from "../OrderDetails";
import { Button } from "../../../../components/Button";
import { FaPlus } from "react-icons/fa";
import { Formulario } from "../../../../components/Form";
import { BGInput } from "../../../../components/BG Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Select } from "../../../../components/Select";
import { OrderStatus } from "../../../../context/OrderContext";
import { SelectEnum } from "../../../../components/SelectEnum";

const OrderInfoSchema = yup.object().shape({
  partner: yup.string().required(),
  logistic: yup.string().notRequired(),
  status: yup.string().notRequired(),
  comments: yup.string().notRequired(),
});

interface OrderInfoProps {
  informacion: string;
  setInformacion: (data: string) => void;
}

interface Prueba {
  partner: string;
  logistic: string;
  status: string;
  comments: string;
}

/* enum OrderStatus {
  APPROVED = "Aprovada",
  PENDING = "Pendente",
  DELAYED = "Atrasada",
  DENIED = "Reprovada",
  RECEIVED = "Recebida",
  DELIVERED = "Entregue",
  DISPATCHED = "Enviada",
  RETURNED = "Devolvida",
  REJECTED = "Rejeitada",
} */

export const OrderInfo =
  (/* { informacion, setInformacion }: OrderInfoProps */) => {
    const orderStatus = Object.values(OrderStatus);

    console.log(orderStatus);

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
      <div>
        Información de la Orden de Compra
        <Formulario onSubmit={handleSubmit(sender)}>
          <div className="data-row">
            <div className="detail-wrapper-dt">
              <div className="individual-detail element-dt">
                {/* <Select
                label="Elemento"
                name="element"
                register={register}
                options={stock}
              /> */}
              </div>
              <div className="individual-detail qty-dt">
                <BGInput
                  register={register}
                  name="partner"
                  error={errors.partner?.message}
                  label="Proveedor"
                  placeholder="Proveedor"
                />
                {/* <Select
                label="Elemento"
                name="partner"
                register={register}
                options={stock}
              /> */}
              </div>
              <div className="individual-detail qty-dt">
                <BGInput
                  register={register}
                  name="logistic"
                  error={errors.logistic?.message}
                  label="Logistica"
                  placeholder="Logistica"
                />
                {/* <Select
                label="Elemento"
                name="element"
                register={register}
                options={stock}
              /> */}
              </div>
              <div className="individual-detail qty-dt">
                {/* <BGInput
                  register={register}
                  name="status"
                  error={errors.status?.message}
                  label="Status"
                  placeholder="Status"
                /> */}
                <SelectEnum
                  label="Status"
                  name="status"
                  register={register}
                  options={orderStatus}
                />
              </div>
              <div className="individual-detail qty-dt">
                <BGInput
                  register={register}
                  name="comments"
                  error={errors.comments?.message}
                  label="Comentarios"
                  placeholder="Comentarios"
                />
              </div>
            </div>
            <div className="botonera-dt">
              <Button variant="yes" type="submit">
                Incluir
              </Button>
            </div>
            <div className="detail-action">
              <button className="detail-btn" type="submit">
                <FaPlus />
              </button>
            </div>
          </div>
        </Formulario>
      </div>
    );
  };
