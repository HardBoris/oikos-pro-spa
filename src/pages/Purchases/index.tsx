import { Link, Outlet, useLocation } from "react-router-dom";
// import "./purchases.style.css";
import "./Purchases.css";
import { Helmet } from "react-helmet";
import { useAuth } from "../../context/UserContext";

export const Purchases = () => {
  const location = useLocation();
  const { company } = useAuth();

  return (
    <>
      <Helmet>
        <title>Oikos | Compras</title>
      </Helmet>
      <div className="purchase">
        <div className="purchase_header">
          {/* <Link
            to={`/${company.companyId}/purchases`}
            className={
              location.pathname === `/${company.companyId}/purchases`
                ? "tab activated"
                : "tab"
            }
          >
            Compras
          </Link> */}
          <Link
            to={`/test/purchases/purchaserequisition`}
            className={
              location.pathname === `/test/purchases/purchaserequisition`
                ? "tab activated"
                : "tab"
            }
          >
            Solicitações de Compra
          </Link>
          <Link
            to={`/test/purchases/newpurchaseorder`}
            className={
              location.pathname === `/test/purchases/newpurchaseorder`
                ? "tab activated"
                : "tab"
            }
          >
            Ordens de Compra
          </Link>
          {/* <Link
            to={`/${company}/purchases/purchasedetails`}
            className={
              location.pathname === `/${company}/purchases/purchasedetails`
                ? "tab activated"
                : "tab"
            }
          >
            Detalhes da Compra
          </Link> */}
        </div>
        <div className="purchase_body">
          <Outlet />
        </div>
      </div>
    </>
  );
};
