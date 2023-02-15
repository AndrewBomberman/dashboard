import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate()
  const menu = [
    {
      text: "Hotels",
      icon: <ApartmentIcon />,
      path: "/",
    },
    {
      text: "Rooms",
      icon: <MeetingRoomIcon />,
      path: "/rooms",
    },
    {
      text: "Bookings",
      icon: <FormatListBulletedIcon />,
      path: "/bookings",
    },
    {
      text: "Statistics",
      icon: <BarChartIcon />,
      path: "/statistics",
    },
    {
      text: "Logout",
      icon: <LogoutIcon />,
      path: "/logout",
    }
  ];

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
              {menu.map((item) => {
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
