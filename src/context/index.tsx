import { ReactNode } from "react";
import { UserProvider } from "./UserContext";
import { CompanyProvider } from "./CompanyContext";
import { PurchaseProvider } from "./PurchaseContext";
import { RequisitionProvider } from "./RequisitionContext";
import { EntryProvider } from "./EntryContext";
import { MoveProvider } from "./MoveContext";
import { PartnerProvider } from "./PartnerContext";
import { DetailProvider } from "./DetailContext";
import { ElementProvider } from "./ElementContext";
import { PurchaseRequestProvider } from "./PurchaseRequisitionContext";
import { OrderProvider } from "./OrderContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <PurchaseRequestProvider>
    <PartnerProvider>
      <OrderProvider>
        <ElementProvider>
          <RequisitionProvider>{children}</RequisitionProvider>
        </ElementProvider>
      </OrderProvider>
    </PartnerProvider>
  </PurchaseRequestProvider>
);
