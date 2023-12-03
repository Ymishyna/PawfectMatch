import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Route, Routes } from "react-router-dom";

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
      </div>
    </>
  );
}

export default App;
