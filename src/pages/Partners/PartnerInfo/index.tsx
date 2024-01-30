import { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import { Order } from "../../Purchases/PurchaseOrder/Order";
import { Formulario } from "../../../components/Form";
import "./style.css";
import { BGSelect } from "../../../components/BGSelect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Partner, usePartner } from "../../../context/PartnerContext";
import { BGInput } from "../../../components/BG Input";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ControlledInput } from "../../../components/ControlledInput";
import { CnpjSearcher } from "./PartnerSearcher";

const PartnerInfoSchema = yup.object().shape({
  CNPJ: yup.string().required(),
  fantasyName: yup.string().required(),
  corporateName: yup.string().required(),
  partnerEmail: yup.string().email().notRequired(),
  partnerPhone: yup.string().notRequired(),
});

interface Establecimento {
  cnpj: string;
  nome_fantasia: string;
  email?: string;
  telefone1?: string;
  ddd1?: string;
}

export interface Fornecedor {
  estabelecimento: Establecimento;
  razao_social: string;
}

interface PartnerInfoProps {
  proveedor: Partner;
  setProveedor: (data: Partner) => void;
}

export const PartnerInfo = ({ proveedor, setProveedor }: PartnerInfoProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { partners } = usePartner();
  const [thisPartner, setThisPartner] = useState<Fornecedor>({
    estabelecimento: {
      cnpj: "0000",
      nome_fantasia: "fantasia",
    },
    razao_social: "qualquier cosa",
  });

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  /* const readValue = (e: any) => {
    const valor: string = e.target.value;
    setThisPartner(partners.filter((partner) => partner.CNPJ === valor)[0]);
  }; */

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

  const ver = () => {
    console.log(thisPartner);
  };

  useEffect(() => {}, []);

  return (
    <>
      <CnpjSearcher setThisPartner={setThisPartner} thisPartner={thisPartner} />
      <Formulario clase="proveedor" onSubmit={handleSubmit(sender)}>
        {thisPartner && (
          <div className="fields">
            <div className="field-20">
              <ControlledInput
                name="CNPJ"
                register={register}
                error={errors.CNPJ?.message}
                label="CNPJ"
                placeholder=""
                value={thisPartner.estabelecimento.cnpj}
                onChange={(e) =>
                  setProveedor({ ...proveedor, CNPJ: e.target.value })
                }
              />
            </div>
            <div className="field-75">
              <ControlledInput
                name="fantasyName"
                register={register}
                error={errors.fantasyName?.message}
                label="Nome Fantasia"
                placeholder=""
                value={thisPartner.estabelecimento.nome_fantasia}
                onChange={(e) =>
                  setProveedor({ ...proveedor, fantasyName: e.target.value })
                }
              />
            </div>
          </div>
        )}
        <div className="fields">
          <div className="field-50">
            <ControlledInput
              name="corporateName"
              register={register}
              error={errors.corporateName?.message}
              label="Nome Corporativo"
              placeholder=""
              value={thisPartner.razao_social}
              onChange={(e) =>
                setProveedor({ ...proveedor, corporateName: e.target.value })
              }
            />
          </div>
          <div className="field-20">
            <ControlledInput
              name="partnerEmail"
              register={register}
              error={errors.partnerEmail?.message}
              label="Email"
              placeholder=""
              value={thisPartner.estabelecimento.email}
              onChange={(e) =>
                setProveedor({ ...proveedor, partnerEmail: e.target.value })
              }
            />
          </div>
          <div className="field-20">
            <ControlledInput
              name="partnerPhone"
              register={register}
              error={errors.partnerPhone?.message}
              label="Telefone"
              placeholder=""
              value={`(${thisPartner.estabelecimento.ddd1}) ${thisPartner.estabelecimento.telefone1}`}
              onChange={(e) =>
                setProveedor({ ...proveedor, partnerPhone: e.target.value })
              }
            />
          </div>
        </div>
        <div className="fields">
          <Button type="submit">Enviar</Button>
          <Button onClick={() => ver()}>ver</Button>
        </div>
      </Formulario>
      {/* <button type="button" onClick={() => handleModal()}>
        abre
      </button>
      <Modal isOpen={isOpen} setIsOpen={handleModal}>
        <Order
          handleClick={handleModal}
        />
      </Modal> */}
    </>
  );
};
