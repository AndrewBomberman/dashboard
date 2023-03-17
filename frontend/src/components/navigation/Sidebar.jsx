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
  
  import ViewsMenu from "./menu/ViewsMenu";
  import AuthMenu from "./menu/AuthMenu";
  import ButtonsMenu from "./menu/ButtonsMenu";
  
  export default function Sidebar() {
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
                {ViewsMenu.map((item) => {
                  return (
                    <ListItem key={item.text}>
                      <ListItemButton>
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
                {ButtonsMenu.map((item) => {
                  return (
                    <ListItem key={item.text}>
                      <ListItemButton>
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
                      <ListItemButton>
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
  