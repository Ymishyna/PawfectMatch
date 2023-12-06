import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
 //import { theme } from "./components/themes";
import { QueryProvider } from "./components/QueryProvider";
import { DonateForm } from "./components/DonateForm";
import { Animal } from "./components/Animalcard";

import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Animal />
      </div>
      <div>
        <div className="search-area">search area here</div>
        <div className="logo-area">
          <img src="./src/assets/Logo.png" alt="Pawfect Match Logo" />
          <h2>PAWfect Match</h2>
        </div>
      </div>
      {/* <ThemeProvider theme={theme}> */}
        <QueryProvider>
          <DonateForm />
        </QueryProvider>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
