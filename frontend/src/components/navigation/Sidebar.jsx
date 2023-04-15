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
  } from "@mui/material";
  import { useNavigate } from "react-router-dom"
  
  import ViewsMenu from "./menu/ViewsMenu";
  import AuthMenu from "./menu/AuthMenu";
import Cookies from "js-cookie";

  
  export default function Sidebar() {
    const navigate = useNavigate()
    return (
      <div className="SideBar">
        <Box sx={{ display: "flex", backgroundColor:"#000"}}>
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            color="info"
            
          >
            <Toolbar>
              <Typography variant="h4" noWrap component="div">
                HotelHub
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              width: 240,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
            }}
          >
            <Toolbar />
            <Box>
              <List>
                {ViewsMenu.map((item) => {
                  return (
                    <ListItem key={item.text}>
                      <ListItemButton onClick={()=> {
                        const auth = Cookies.get('auth');
                        auth ? navigate(item.path) : navigate("/auth")
                      }}>
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
                      <ListItemButton onClick={()=>{
                        Cookies.remove("auth")
                        navigate("/auth")
                      }}>
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
  