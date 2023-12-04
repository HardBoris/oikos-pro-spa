import { Button } from "../../../../components/Button";
import { PRDetails } from "../PRDetails";
import { useState } from "react";
import { ElementToBuy } from "../../../../context/ElementContext";
import { Container } from "../../../../components/Container";
import { PRDetailsList } from "../PRDetailsList";
// import { useAuth } from "../../../../context/UserContext";
import "./PRInfo.css";
import { usePurchaseRequest } from "../../../../context/PurchaseRequisitionContext";

export const PRInfo = () => {
  // const { user, company } = useAuth();
  const { PurchaseRequestCreator } = usePurchaseRequest();
  const ahora = Date.now();
  const [elementos, setElementos] = useState<ElementToBuy[]>([]);

  const sender = () => {
    const data = {
      // requestor: user.userId,
      // company: company.code,
      details: elementos,
    };

    PurchaseRequestCreator(data);
  };

  return (
    <div className="form-wrapper-purchase">
      <Container>
        <div className="shoppinglist-wrapper">
          <div className="input-purchase date">
            {new Date(ahora).toLocaleDateString("pt")}
          </div>
          <PRDetails elementos={elementos} setElementos={setElementos} />
          <PRDetailsList elementos={elementos} setElementos={setElementos} />
        </div>
        <div className="input-purchase">
          <Button type="button" variant="yes" onClick={() => sender()}>
            Avançar
          </Button>
        </div>
      </Container>
    </div>
  );
};
