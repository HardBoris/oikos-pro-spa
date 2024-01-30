import { useState } from "react";
import { PartnerInfo } from "./PartnerInfo";
import { Partner } from "../../context/PartnerContext";
import { PartnersList } from "./PartnersList";

export const Partners = () => {
  const [proveedor, setProveedor] = useState<Partner>({} as Partner);
  return (
    <>
      <PartnerInfo proveedor={proveedor} setProveedor={setProveedor} />
      <PartnersList></PartnersList>
    </>
  );
};
