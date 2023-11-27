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

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <CompanyProvider>
    <UserProvider>
      <PartnerProvider>
        <PurchaseRequestProvider>
          <PurchaseProvider>
            <ElementProvider>
              <RequisitionProvider>
                <EntryProvider>
                  <MoveProvider>{children}</MoveProvider>
                </EntryProvider>
              </RequisitionProvider>
            </ElementProvider>
          </PurchaseProvider>
        </PurchaseRequestProvider>
      </PartnerProvider>
    </UserProvider>
  </CompanyProvider>
);
