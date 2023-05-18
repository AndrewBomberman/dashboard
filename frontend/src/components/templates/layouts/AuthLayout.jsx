import Sidebar from "../../navigation/Sidebar";
import Container from "@mui/material/Container"


export default function Layout({children}) {
 

  return (
    <div className="Auth Layout">
      <header>
        <Sidebar />
      </header>

      <main >
        <div
          style={{
            display: "flex",
            marginLeft: 10,
            paddingTop: 100,
            width:"100%"
          }}
        >
          <Container sx={{width:"100%"}} >
            {children}
          </Container>
        </div>
      </main>
    </div>
  );
}
