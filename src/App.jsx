/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/Addtocart/Cart.jsx';
import Homepage from './Pages/Homepage.jsx'
import ProductDetails from './Product/Product.jsx'
import Aboutus from './Pages/Aboutus.jsx'
import Cartpage from './Pages/Cartpage.jsx'
import Navbar from './Component/Navbar/Navbar.jsx'

const App = () => {
  return (
    <CartProvider>
    <Routes>
    <Route>
    <Route path="/" element={<Homepage />} />
    <Route path="/aboutus" element={<Aboutus />} />
    <Route path="/cart" element={<Cartpage />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    </Route>
    </Routes>
    </CartProvider>
  )
}

export default App