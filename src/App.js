import React from 'react';

//import Cards from './components/Cards';
import NavBar from './components/NavBar';

//import UseFetch from './components/UseFetch';
import { Outlet } from 'react-router-dom';



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Burger from './components/Burger';
import SignIn from './components/SignIn';
import Checkoutpage from './components/CheckoutPage';

import SignUp from './components/SignUp';



const App = () => {






  return (
    <div>
    <NavBar />
    <Outlet />
     

      <BrowserRouter>
  
   
  <Routes>
    <Route path='/' element={<Burger />}>
     
      <Route path='signin' element={<SignIn/> } />
      <Route path='signup' element={<SignUp /> } />
      <Route path='checkoutpage' element={<Checkoutpage /> } />
     

    </Route>
  </Routes>
  
  
  
   </BrowserRouter>
    </div>
  );
}

export default App;
