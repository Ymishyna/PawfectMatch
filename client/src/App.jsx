import './App.css';
import { Outlet } from 'react-router-dom';
//import { ThemeProvider} from '@mui/material/styles';
//import theme from './themes';
//import { QueryProvide } from './QueryProvider';
//import DonationForm form '../components/DonationForm;

import Navbar from './components/Navbar';
import DonationForm from './components/DonateForm';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
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
