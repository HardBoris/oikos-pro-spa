import { useForm } from "react-hook-form";
import { BGInput } from "../../../../components/BG Input";
import { Button } from "../../../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ElementToBuy, useElement } from "../../../../context/ElementContext";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Formulario } from "../../../../components/Form";
import { jsNota } from "../../../../utils";
// import "./PRDetails.css";
import { Select } from "../../../../components/Select";
import { usePurchaseRequest } from "../../../../context/PurchaseRequisitionContext";

const OrderDetailsSchema = yup.object().shape({
  element: yup.string().required(),
  quantity: yup.string().required(),
  measurement: yup.string().required(),
});

interface OrderDetailsProps {
  elementos: ElementToBuy[];
  setElementos: (data: ElementToBuy[]) => void;
}

export const OrderDetails = ({
  elementos,
  setElementos,
}: OrderDetailsProps) => {
  const { ElementCreator, stock } = useElement();
  const { solicitudes } = usePurchaseRequest();
  const [hilo, setHilo] = useState("");

  const {
    formState,
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm<ElementToBuy>({
    resolver: yupResolver(OrderDetailsSchema),
  });

  const sender = (info: ElementToBuy) => {
    const { element } = info;

    const existe = stock.filter((item) => item.elementId === element)[0];

    /* if (!existe) {
      ElementCreator(info);
    } */

    const material: ElementToBuy = elementos.filter(
      (item) => item.element === element
    )[0];

    material
      ? jsNota(207.652)
      : setElementos([
          ...elementos,
          {
            ...info,
            element: existe,
          },
        ]);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        element: {},
        quantity: "",
        measurement: "",
      });
    }
  }, [formState, reset]);

  const drama = () => {
    console.log(hilo);
  };

  return (
    <>
      {/* <Formulario onSubmit={handleSubmit(drama)}>
        <div className="individual-detail element-dt">
          <div className="select-wrapper">
            <label>Listas de Compra</label>
            <select
              name="shoppingList"
              id="shoppingList"
              className="select-field"
              onChange={(e) => setHilo(e.target.value)}
            >
              {solicitudes.map((item, index) => (
                <option key={index} value={item.purchaseRequestId}>
                  {item.purchaseRequestDate}
                </option>
              ))}
            </select>
          </div>
          <input type="submit" value="Envia" />
        </div>
      </Formulario> */}
      <Formulario onSubmit={handleSubmit(sender)}>
        <div className="fields">
          <div className="field-40 abajo">
            <Select
              label="Elemento"
              name="element"
              register={register}
              options={stock}
            />
          </div>
          <div className="field-10 abajo">
            <BGInput
              register={register}
              name="quantity"
              error={errors.quantity?.message}
              label="Quantidade"
              placeholder="moveQuantity"
            />
          </div>
          <div className="field-10 abajo">
            <BGInput
              register={register}
              name="measurement"
              error={errors.measurement?.message}
              label="Unidade"
              placeholder="m, k, l"
            />
          </div>
          <div className="field-10 abajo">
            <BGInput
              register={register}
              name="unitPrice"
              error={errors.unitPrice?.message}
              label="Preço Unitario"
              placeholder="Preço Unitário"
            />
          </div>
          <div className="field-10 abajo">
            <Button type="submit">
              <FaPlus />
            </Button>
          </div>
        </div>
      </Formulario>
    </>
  );
};
