import { Resolver, useForm } from "react-hook-form";
import {
  Requisicion,
  useRequisition,
} from "../../../context/RequisitionContext";
import { Formulario } from "../../../components/Form";
// import { BGInput } from "../../../components/BGInput";
import { Button } from "../../../components/Button";
import { BGInput } from "../../../components/BG Input";

const resolver: Resolver<Requisicion> = async (values) => {
  return {
    values: values.requestDate ? values : {},
    errors: {},
  };
};

interface RequestEditFormProps {
  handleEditor: () => void;
  requisicion: Requisicion;
}

export const EditForm = ({
  handleEditor,
  requisicion,
}: RequestEditFormProps) => {
  const { RequestEditor, Fechador } = useRequisition();

  const { register, handleSubmit } = useForm<Requisicion>({ resolver });

  const editado = (data: Requisicion) => {
    RequestEditor(data);
    handleEditor();
  };

  const fecha = Fechador(requisicion.requestDate);

  return (
    <Formulario clase="" onSubmit={handleSubmit(editado)}>
      <div className="horizontal-fields">
        <div className="individual-field">
          <BGInput
            name="requestId"
            value={requisicion.requestId}
            register={register}
          />
        </div>
        <div className="individual-field">
          <BGInput name="requestDate" value={fecha} register={register} />
        </div>
      </div>
      <div className="horizontal-fields">
        <div className="individual-field">
          <BGInput
            name="requestTarget"
            defaultValue={requisicion.service.order}
            register={register}
          />
        </div>
        <div className="individual-field">
          <BGInput
            name="requestor"
            defaultValue={requisicion.requestor.name}
            register={register}
          />
        </div>
      </div>
      <div className="modal-btn">
        <div className="individual-btn">
          <Button type="button" variant="not" onClick={() => handleEditor()}>
            Cancelar
          </Button>
        </div>
        <div className="individual-btn">
          <Button type="submit" variant="yes">
            Editar
          </Button>
        </div>
      </div>
    </Formulario>
  );
};
