import { Outlet } from "react-router-dom";
import Sidebar from "../navigation/Sidebar";
export default function Layout() {
  return (
    <div className="Layout">
      <header>
        <Sidebar />
      </header>

      <main>
        <div style={{ display: "flex", marginLeft: 260,  paddingTop:80}}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
