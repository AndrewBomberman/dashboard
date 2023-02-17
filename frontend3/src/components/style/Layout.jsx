import { Outlet } from "react-router-dom";
import Sidebar from "../navigation/Sidebar";
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
export default function Layout() {
  return (
    <div className="Layout">
      <header>
        <Sidebar />
      </header>

      <main>
        <div
          style={{
            display: "flex",
            marginLeft: 250,
            marginRight: 50,
            paddingTop: 80,
          }}
        >
          <Outlet />
          
        </div>
      </main>
    </div>
  );
}
