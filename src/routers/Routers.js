import React from 'react'
import { Routes, Route, Navigate, Switch } from 'react-router-dom';

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
        {/* <Switch> */}
          <Route exact path='/' element={<Navigate to='/home' />}  />
          <Route exact path='home' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='shop/:id' element={<ProductDetails />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<ProtectedRoute> <Checkout /> </ProtectedRoute> } />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        {/* </Switch> */}
    </Routes>
  )
}

export default Routers;
