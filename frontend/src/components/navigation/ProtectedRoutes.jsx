import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../templates/Layout";

export default function ProtectedRoutes() {
  const auth = Cookies.get("auth");
  console.log(auth)
  return (auth ?<Layout><Outlet /></Layout> : <Navigate to="/login" />);
}
