import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'



import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductsDetails from '../pages/ProductsDetails'
import CheckOut from '../pages/CheckOut'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Routers = () => {
    return (<Routes>
        <Route path='/' element={<Navigate to="home" />} />
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:id' element={<ProductsDetails />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<CheckOut />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />

    </Routes>

    )
}

export default Routers