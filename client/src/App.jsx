import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Route, Routes } from "react-router-dom";
//import { ThemeProvider} from '@mui/material/styles';
//import theme from './themes';
//import { QueryProvide } from './QueryProvider';
//import DonationForm form '../components/DonationForm;

import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import DonationForm from './components/DonateForm';

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

  // return (
  //   <ThemeProvider theme={theme}>
  //     <QueryProvider>
            <DonationForm />
  //     </QueryProvider>
  //   </ThemeProvider>
  // );
}

export default App;
