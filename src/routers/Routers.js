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
      <Route path='/' element={<Navigate to='/home' basename="/Tmart" />} />
      <Route path='home' element={<Home />} basename="/Tmart" />
      <Route path='shop' element={<Shop />} basename="/Tmart" />
      <Route path='shop/:id' element={<ProductDetails />} basename="/Tmart" />
      <Route path='cart' element={<Cart />} basename="/Tmart" />
      <Route path='checkout' element={<ProtectedRoute> <Checkout /> </ProtectedRoute> } />
      <Route path='login' element={<Login />} basename="/Tmart" />
      <Route path='signup' element={<Signup />} basename="/Tmart" />
    </Routes>
  )
}

export default Routers;
