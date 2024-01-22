import { useState } from "react";
import Modal from "../../components/Modal";
import { Order } from "../Purchases/PurchaseOrder/Order";
import { Formulario } from "../../components/Form";
import "./style.css";
import { BGSelect } from "../../components/BGSelect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Partner } from "../../context/PartnerContext";
import { BGInput } from "../../components/BG Input";
import { Button } from "../../components/Button";

const PartnerInfoSchema = yup.object().shape({
  CNPJ: yup.string().required(),
  fantasyName: yup.string().required(),
  corporateName: yup.string().required(),
  partnerEmail: yup.string().email().notRequired(),
  partnerPhone: yup.string().notRequired(),
});

interface PartnerInfoProps {
  proveedor: Partner;
  setProveedor: (data: Partner) => void;
}

export const Partners = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Partner>({
    resolver: yupResolver(PartnerInfoSchema),
  });

  const sender = (data: Partner) => {
    console.log(data);
  };

  return (
    <>
      Partners
      <Formulario clase="proveedor" onSubmit={handleSubmit(sender)}>
        <div className="fields">
          <div className="field-20">
            <BGSelect
              name="CNPJ"
              register={register}
              error={errors.CNPJ?.message}
              label="CNPJ"
            ></BGSelect>
          </div>
          <div className="field-75">
            <BGInput
              name="fantasyName"
              register={register}
              error={errors.fantasyName?.message}
              label="Nome Fantasia"
              placeholder=""
            />
          </div>
        </div>
        <div className="fields">
          <div className="field-50">
            <BGInput
              name="corporateName"
              register={register}
              error={errors.corporateName?.message}
              label="Nome Corporativo"
              placeholder=""
            />
          </div>
          <div className="field-20">
            <BGInput
              name="partnerEmail"
              register={register}
              error={errors.partnerEmail?.message}
              label="Email"
              placeholder=""
            />
          </div>
          <div className="field-20">
            <BGInput
              name="partnerPhone"
              register={register}
              error={errors.partnerPhone?.message}
              label="Telefone"
              placeholder=""
            />
          </div>
        </div>
        <div className="fields">
          <Button type="submit">Enviar</Button>
        </div>
      </Formulario>
      <button type="button" onClick={() => handleModal()}>
        abre
      </button>
      <Modal isOpen={isOpen} setIsOpen={handleModal}>
        <Order
          /* isOpen={isOpen} setIsOpen={setIsOpen} */ handleClick={handleModal}
        />
      </Modal>
    </>
  );
};
