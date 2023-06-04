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
      <Route path='/' element={<Navigate to='/home' />} basename="/Tmart" exact component={Home} />
      <Route path='home' element={<Home />} basename="/Tmart" exact component={Home} />
      <Route path='shop' element={<Shop />} basename="/Tmart" exact component={Shop} />
      <Route path='shop/:id' element={<ProductDetails />} basename="/Tmart" />
      <Route path='cart' element={<Cart />} basename="/Tmart" exact component={Cart}/>
      <Route path='checkout' element={<ProtectedRoute> <Checkout /> </ProtectedRoute> } />
      <Route path='login' element={<Login />} basename="/Tmart" exact component={Login} />
      <Route path='signup' element={<Signup />} basename="/Tmart" exact component={Signup} />
    </Routes>
  )
}

export default Routers;
