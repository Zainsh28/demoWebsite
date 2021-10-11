import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    text: {
      primary: {
        main: "#1A76D2",
      },
      secondary: {
        main: "grey",
      },
    },
    links: {
      main: "white",
    },
    background: {
      default: "rgb(255,255,255)"
    },
    action: {
      active: "rgb(255,255,255)",
      activatedOpacity: "1"
    }
  },
});




export const darkTheme = createTheme({
  palette: {
    text: {
      primary: {
        main: "#BC86FC"
      },
      secondary: {
        main: "#E1E1E1",
      },
    },
    links: {
      main: "#1A76D2"
    },
    background: {
      default: "#292929"
    },
    action: {
      active: "#292929",
      activatedOpacity: "1"
    }
  },
});