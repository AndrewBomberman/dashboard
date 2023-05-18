import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/HotelHub-logos.jpeg";

import ViewsMenu from "./menu/ViewsMenu";
import AuthMenu from "./menu/AuthMenu";
import Cookies from "js-cookie";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="SideBar">
      <Box sx={{ display: "flex", backgroundColor: "#000" }}>
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            height: 100,
            backgroundColor: "#000",
          }}
          color="info"
        >
          <Toolbar sx={{ justifyContent: "center" }}>
            <Typography
              variant="h3"
              component="div"
              textAlign={"center"}
              paddingTop={2}
            >
              Your Hotels... Your Way...
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 200,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 200, boxSizing: "border-box" },
          }}
        >
          <Box sx={{ paddingTop: 10 }}>
            <List>
              <img
                src={logo}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
                onClick={() => navigate("/")}
              />

              {ViewsMenu.map((item) => {
                return (
                  <ListItem key={item.text}>
                    <ListItemButton
                      onClick={() => {
                        const auth = Cookies.get("auth");
                        auth ? navigate(item.path) : navigate("/auth/login");
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Divider />
          <Box>
            <List>
              {AuthMenu.map((item) => {
                return (
                  <ListItem key={item.text}>
                    <ListItemButton
                      onClick={() => {
                        Cookies.remove("auth");
                        navigate("/auth");
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      </Box>
    </div>
  );
}
