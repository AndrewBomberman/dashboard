import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import AuthLayout from "../templates/layouts/AuthLayout";



export default function ProtectedRoutes() {
  const auth = Cookies.get("auth");
  console.log(auth)
  return (auth ?<AuthLayout>
   <Outlet />
   </AuthLayout> : <Navigate to="/auth" />);
}
