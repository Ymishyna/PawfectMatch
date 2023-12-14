import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";

import { Animal } from "./components/Animalcard";
// import {flipCard} from "./components/pages/Home";

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
