import { Resolver, useForm } from "react-hook-form";
import { Formulario } from "../../../components/Form";
// import { BGInput } from "../../../components/BGInput";
import { Button } from "../../../components/Button";
import { Movement, useMove } from "../../../context/MoveContext";
import { BGInput } from "../../../components/BG Input";

const resolver: Resolver<Movement> = async (values) => {
  return {
    values: values.moveElement ? values : {},
    errors: {},
  };
};

interface MoveEditFormProps {
  handleEditor: () => void;
  move: Movement;
}

export const MoveEditForm = ({ handleEditor, move }: MoveEditFormProps) => {
  const { moveEditor } = useMove();

  const { register, handleSubmit } = useForm<Movement>({ resolver });

  const editado = (data: Movement) => {
    moveEditor(data);
    handleEditor();
  };

  // const fecha = Fechador(requisicion.requestDate);

  return (
    <Formulario clase="" onSubmit={handleSubmit(editado)}>
      <div className="horizontal-fields">
        <div className="individual-field">
          <BGInput name="moveId" value={move.moveId} register={register} />
        </div>
        <div className="individual-field">
          <BGInput
            name="moveElement"
            value={move.moveElement}
            register={register}
          />
        </div>
        <div className="individual-field">
          <BGInput
            name="elementType"
            value={move.elementType}
            register={register}
          />
        </div>
      </div>
      <div className="horizontal-fields">
        <div className="individual-field">
          <BGInput name="moveType" value={move.moveType} register={register} />
        </div>
        <div className="individual-field">
          <BGInput
            name="moveQuantity"
            defaultValue={move.moveQuantity}
            register={register}
          />
        </div>
        <div className="individual-field">
          <BGInput name="moveUnit" value={move.moveUnit} register={register} />
        </div>
        <div className="individual-field">
          <BGInput
            name="requisitionId"
            value={move.requisition?.requestId}
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
