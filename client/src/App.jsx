import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider} from '@mui/material/styles';
import theme from './themes';
import { QueryProvider } from './QueryProvider';
//import {Donation} './components/DonateForm';

import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import DonateForm from './components/DonateForm';

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

   return (
     <ThemeProvider theme={theme}>
       <QueryProvider>
            <DonateForm />
      </QueryProvider>
    </ThemeProvider>
   );
}

export default App;
