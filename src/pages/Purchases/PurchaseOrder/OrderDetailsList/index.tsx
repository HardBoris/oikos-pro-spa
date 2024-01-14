import { FaTrash } from "react-icons/fa";
import { Button } from "../../../../components/Button";
import { ElementToBuy } from "../../../../context/ElementContext";

interface DetailsListProps {
  elementos: ElementToBuy[];
  setElementos: (item: ElementToBuy[]) => void;
}

export const OrderDetailsList = ({
  elementos,
  setElementos,
}: DetailsListProps) => {
  const eliminator = (id: string | undefined, i: number) => {
    setElementos(elementos.filter((item) => item.element?.elementId !== id));
    elementos.splice(i, 1);
  };

  return (
    <div className="rack">
      {/* <div className="data-show"> */}
      {elementos &&
        elementos.map((item, index) => (
          <div key={index} className="shelf">
            <div className="packet">
              <div className="wrap-40">
                <div className="box">{item.element?.element}</div>
              </div>
              <div className="wrap-20">
                <div className="box">{item.quantity}</div>
              </div>
              <div className="wrap-20">
                <div className="box">{item.measurement}</div>
              </div>
              <div className="wrap-10">
                <Button
                  type="button"
                  onClick={() => eliminator(item.element?.elementId, index)}
                >
                  <FaTrash />
                </Button>
              </div>
            </div>
          </div>
        ))}
      {/* </div> */}
    </div>
  );
};
