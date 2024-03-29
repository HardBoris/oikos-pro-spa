import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Purchases } from "../pages/Purchases";
import { PurchaseRequisition } from "../pages/Purchases/PurchaseRequisition";
import { PurchaseOrder } from "../pages/Purchases/PurchaseOrder";
import { Formato } from "../pages/formato";
import { Partners } from "../pages/Partners";
// import { Login } from "../pages/Login";
// import { Signup } from "../pages/Signup";

export const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="signup" element={<Signup />} /> */}
        <Route path="test/purchases" element={<Purchases />}>
          <Route path="purchaserequisition" element={<PurchaseRequisition />} />
          <Route path="newpurchaseorder" element={<PurchaseOrder />} />
        </Route>
        <Route path="partners" element={<Partners />}></Route>
        <Route path="/desarrollo" element={<Formato />} />
      </Routes>
      <Outlet />
    </>
  );
};
