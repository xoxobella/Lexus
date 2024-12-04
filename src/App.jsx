/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Homepage />} />
    </Routes>
    </>
  )
}

export default App