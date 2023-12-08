import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
// import { ThemeProvider } from "@mui/material/styles";
// import { theme } from "./themes";
// import { QueryProvide } from "./QueryProvider";
// import { DonationForm } from "./components/DonateForm";
// import { Animalcard } from "./components/Animalcard";
 //import { theme } from "./components/themes";
// import { QueryProvider } from "./components/QueryProvider";
// import { DonateForm } from "./components/DonateForm";
import { Animal } from "./components/Animalcard";

import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";


import SignupForm from "./components/SignupForm";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<SignupForm />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
