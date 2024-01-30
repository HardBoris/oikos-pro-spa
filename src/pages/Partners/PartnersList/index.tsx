import { usePartner } from "../../../context/PartnerContext";

export const PartnersList = () => {
  const { partners } = usePartner();
  return (
    <>
      <div className="rack">
        {partners &&
          partners.map((partner) => (
            <div key={partner.CNPJ} className="shelf">
              <div className="wrap-30">
                <div className="box">{partner.CNPJ}</div>
              </div>
              <div className="wrap-50">
                <div className="box">{partner.fantasyName}</div>
              </div>
              <div className="wrap-10">
                <div className="box">{partner.partnerPhone}</div>
              </div>
              {/* <div className="wrap-10">envelope 4</div>
              <div className="wrap-10">envelope 5</div> */}
            </div>
          ))}
      </div>
    </>
  );
};
