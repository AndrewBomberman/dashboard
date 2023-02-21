import { Outlet } from "react-router-dom";
import Sidebar from "../navigation/Sidebar";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
export default function Layout() {
  return (
    <div className="Layout">
      <header>
        <Sidebar />
      </header>

      <main >
        <div
          style={{
            display: "flex",
            marginLeft: 10,
            paddingTop: 80,
          }}
        >
          <Container >
            <Outlet />
          </Container>
        </div>
      </main>
    </div>
  );
}
