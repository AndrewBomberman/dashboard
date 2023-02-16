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
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import Menu from "./Menu";

export default function Sidebar() {
  const navigate = useNavigate()
  

  return (
    <div className="SideBar">
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          color="info"
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Dashboard
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
              {Menu.map((item) => {
                return (
                  
                  <ListItem key={item.text}>
                    <ListItemButton onClick={()=>{navigate(item.path)}}>
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
