import { BGInput } from "../../../../components/BG Input";
import { Formulario } from "../../../../components/Form";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Partner } from "../../../../context/PartnerContext";
import consultarCNPJ from "consultar-cnpj";
import { Button } from "../../../../components/Button";
import { Fornecedor } from "..";

const CnpjSearcherSchema = yup
  .object()
  .shape({ cnpj_searcher: yup.string().required() });

interface Buscador {
  cnpj_searcher: string;
}

interface BuscadorProps {
  setThisPartner: (partner: Fornecedor) => void;
  thisPartner: Fornecedor;
}

export const CnpjSearcher = ({
  setThisPartner,
  thisPartner,
}: BuscadorProps) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Buscador>({
    resolver: yupResolver(CnpjSearcherSchema),
  });

  const buscador = async (dato: Buscador) => {
    try {
      const empresa = await consultarCNPJ(dato.cnpj_searcher);
      setThisPartner(empresa);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(thisPartner.estabelecimento);

  return (
    <>
      <Formulario onSubmit={handleSubmit(buscador)}>
        <div className="field-30">
          <BGInput
            name="cnpj_searcher"
            register={register}
            error={errors.cnpj_searcher?.message}
          />
        </div>
        <Button>Buscar</Button>
      </Formulario>
    </>
  );
};
