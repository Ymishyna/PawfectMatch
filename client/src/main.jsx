import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
// import SearchBooks from './pages/SearchBooks'
// import SavedBooks from './pages/SavedBooks'
// import About from './components/About.jsx'
// import Animal from './components/Animalcard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <About />
      }, {
        path: '/Login',
        element: <LoginForm />
      },
      {
        path: '/SignUp',
        element: <SignUpForm />
      },
    {
      path: '/Animalcard',
      element: <Animalcard />
    },
  {
    path: '/ Donate',
    element: <Donate />
  }
]
    
  
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
