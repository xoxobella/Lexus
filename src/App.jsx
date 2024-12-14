/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import ProductDetails from './Product/Product.jsx'
import Aboutus from './Pages/Aboutus.jsx'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/aboutus" element={<Aboutus />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    </>
  )
}

export default App