import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
// import { ThemeProvider } from "@mui/material/styles";
<<<<<<< HEAD
// import { theme } from "./themes";
// import { QueryProvide } from "./QueryProvider";
// import { DonationForm } from "./components/DonateForm";
// import { Animalcard } from "./components/Animalcard";
=======
 //import { theme } from "./components/themes";
// import { QueryProvider } from "./components/QueryProvider";
// import { DonateForm } from "./components/DonateForm";
import { Animal } from "./components/Animalcard";
>>>>>>> 6139cb336ebcec233a2667b6f96520e597f74d64

import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
<<<<<<< HEAD
        {/* <Animalcard /> */}
      </div>
      {/* <ThemeProvider theme={theme}>
        <QueryProvider>
          <DonationForm />
        </QueryProvider>
      </ThemeProvider> */}
=======
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
        {/* <QueryProvider> */}
          {/* <DonateForm /> */}
        {/* </QueryProvider> */}
      {/* </ThemeProvider> */}
>>>>>>> 6139cb336ebcec233a2667b6f96520e597f74d64
    </>
  );
}

export default App;
