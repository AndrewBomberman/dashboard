import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";


export default function GuestLayout() {
  const auth = Cookies.get("auth")
    console.log(auth)
    if(auth){
      return <Navigate to={"/"}/>
    }
  return (
    <div className="Guest Layout">
      <main>
        <div
          style={{
            display: "flex",
            marginLeft: 10,
            paddingTop: 100,
            width: "100%",
          }}
        >
          <Container sx={{ width: "100%" }}>
            <Outlet />
          </Container>
        </div>
      </main>
    </div>
  );
}
