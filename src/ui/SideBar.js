import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import StyledButton from "./StyledButton";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Menu } from "@mui/icons-material";

import ToggleButton from "./ToggleButton";

export default function SideBar({ routes, setDarkMode, darkMode }) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <div>

      <Menu onClick={toggleDrawer} />
      <Drawer open={state} onClose={toggleDrawer}>
        <Box
          component="div"
          sx={
            {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "1rem",
              minWidth: "250px",
              height: "100vh",
              bgcolor: "primary.main",
            }
          }
        >
          <Typography variant="h5" component="div" sx={{ color: "white" }}>
            Portfolio
          </Typography>
          <List>
            {
              routes.map(route => (
                <ListItem
                  sx={{
                    color: "primary.light"
                  }}
                  key={route.path}
                  component={NavLink}
                  activeStyle={{
                    color: "white",
                  }}
                  exact={true}
                  to={route.path}
                  label={route.label}>
                  <ListItemText primary={route.label} />
                </ListItem>
              ))
            }
          </List>
          <hr style={{
            width: "100%"
          }} />
          <br />
          <StyledButton bg="#FFBA60" color="white" border="none" font="cursive">
            Free Estimate
          </StyledButton>
          <br />
          <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </Box>
      </Drawer>
    </div >
  );
}
