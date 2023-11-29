import { useForm } from "react-hook-form";
import { BGInput } from "../../../../components/BG Input";
import { Button } from "../../../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ElementToBuy, useElement } from "../../../../context/ElementContext";
import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";
import { Formulario } from "../../../../components/Form";
import { jsNota } from "../../../../utils";
import "./PRDetails.css";
import { Select } from "../../../../components/Select";

const DetailInfoSchema = yup.object().shape({
  element: yup.string().required(),
  quantity: yup.string().required(),
  measurement: yup.string().required(),
});

interface DetailsProps {
  elementos: ElementToBuy[];
  setElementos: (data: ElementToBuy[]) => void;
}

export const PRDetails = ({ elementos, setElementos }: DetailsProps) => {
  const { ElementCreator, stock } = useElement();

  const {
    formState,
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm<ElementToBuy>({
    resolver: yupResolver(DetailInfoSchema),
  });

  const sender = (info: ElementToBuy) => {
    const { element } = info;
    console.log(element);

    const existe = stock.filter((item) => item.elementId === element)[0];

    if (!existe) {
      ElementCreator(info);
    }

    const material: ElementToBuy = elementos.filter(
      (item) => item.element === element
    )[0];

    material
      ? jsNota(207.652)
      : setElementos([
          ...elementos,
          {
            ...info,
            element: existe?.elementId,
          },
        ]);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        element: "",
        quantity: "",
        measurement: "",
      });
    }
  }, [formState, reset]);

  return (
    <div className="wrapper-dt">
      <Formulario onSubmit={handleSubmit(sender)}>
        <div className="data-row">
          <div className="detail-wrapper-dt">
            {/* <div className="individual-detail element-dt">
              <BGInput
                register={register}
                name="element"
                error={errors.element?.message}
                label="Elemento"
                placeholder="Descrição do elemento"
              />
            </div> */}
            <div className="individual-detail element-dt">
              <Select
                label="Elemento"
                name="element"
                register={register}
                options={stock}
              />
              {/* <BGInput
                register={register}
                name="elementType"
                error={errors.elementType?.message}
                label="Tipo de elemento"
                placeholder="Ferramenta, acessório"
              /> */}
            </div>
            <div className="individual-detail qty-dt">
              <BGInput
                register={register}
                name="quantity"
                error={errors.quantity?.message}
                label="Quantidade"
                placeholder="moveQuantity"
              />
            </div>
            <div className="individual-detail unit-dt">
              <BGInput
                register={register}
                name="measurement"
                error={errors.measurement?.message}
                label="Unidade"
                placeholder="m, k, l"
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
