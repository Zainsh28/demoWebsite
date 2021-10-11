import React from "react"
import Header from "../ui/Header";
import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import Footer from "./Footer"
import { ThemeProvider } from "@mui/material/styles";
import { theme, darkTheme } from "../ui/Theme"
import { CssBaseline } from "@mui/material";

const App = () => {

  const [darkMode, setDarkMode] = React.useState(false)


  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={darkMode ? darkTheme : theme}>
          <CssBaseline />
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Router />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;