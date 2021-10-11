import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";
import StyledTab from "../ui/StyledTab";
import StyledButton from "../ui/StyledButton";
import SideBar from "./SideBar";
import useMediaQuery from '@mui/material/useMediaQuery';

import ToggleButton from "./ToggleButton"

const Header = ({ setDarkMode, darkMode }) => {

  const isScreenSmall = useMediaQuery('(max-width:700px)');
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const routes = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/services",
      label: "Services",
    },
    {
      path: "/about",
      label: "About Us",
    },
    {
      path: "/contact",
      label: "Contact Us",
    },
  ];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          {isScreenSmall ? (
            <SideBar darkMode={darkMode} setDarkMode={setDarkMode} routes={routes} />
          ) : (
            <>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="white"
                centewhite
              >
                {routes.map(route => (
                  <StyledTab
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
                    label={route.label}
                  />
                ))}
              </Tabs>
              <StyledButton
                bg="#FFBA60"
                color="white"
                border="none"
                font="pacifico"
              >
                Free Estimate
              </StyledButton>
              <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;