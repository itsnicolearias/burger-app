import React from 'react';

//import Cards from './components/Cards';
import NavBar from './components/NavBar';

//import UseFetch from './components/UseFetch';
import { Outlet } from 'react-router-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Burger from './pages/Burger';
import Checkoutpage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';





const App = () => {


  return (
    <div>
    <NavBar />
    <Outlet />
     

      <BrowserRouter>
  
   
  <Routes>
    <Route path='/' element={<Burger />}>
     
      <Route path='signin' element={<LoginPage /> } />
      <Route path='signup' element={<RegisterPage /> } />
      <Route path='checkoutpage' element={<Checkoutpage /> } />
     

    </Route>
  </Routes>
  
  
  
   </BrowserRouter>
    </div>
  );
}

export default App;
