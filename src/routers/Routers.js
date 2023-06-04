import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home.jsx'
import Shop from '../pages/Shop.jsx'
import Cart from '../pages/Cart.jsx'
import ProductDetails from '../pages/ProductDetails.jsx'
import Login from '../pages/Login.jsx'
import Signup from '../pages/SignUp.jsx'
import Checkout from '../pages/CheckOut.jsx'
import ProtectedRoute from './ProtectedRoute.js';

const Routers = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='/home' />}  />
      <Route exact path='home' element={<Home />} />
      <Route exact path='shop' element={<Shop />} />
      <Route exact path='shop/:id' element={<ProductDetails />} />
      <Route exact path='cart' element={<Cart />} />
      <Route exact path='checkout' element={<ProtectedRoute> <Checkout /> </ProtectedRoute> } />
      <Route exact path='login' element={<Login />} />
      <Route exact path='signup' element={<Signup />} />
    </Routes>
  )
}

export default Routers;
