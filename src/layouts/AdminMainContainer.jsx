import { Outlet } from "react-router-dom";
import NavAdmin from "./NavAdmin";

export default function AdminMainContainer() {
  return (
    <>
      <NavAdmin />
      <Outlet />
    </>
  );
}
