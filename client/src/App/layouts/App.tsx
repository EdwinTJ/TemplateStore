import Catalog from "../../feature/catalog/Catalog";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";

import { Container, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route } from "react-router-dom";
import HomePage from "../../feature/home/HomePage";
import ProductDetails from "../../feature/catalog/ProductDetails";
import AboutPage from "../../feature/about/AboutPage";
import ContactPage from "../../feature/contact/ContactPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/catalog/:id" component={ProductDetails} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
