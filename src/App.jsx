/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/Addtocart/Cart.jsx';
import { Provider } from 'react-redux';
import store from './Redux/Store.js'; 
import Homepage from './Pages/Homepage.jsx'
import ProductDetails from './Product/Product.jsx'
import Aboutus from './Pages/Aboutus.jsx'
import Cartpage from './Pages/Cartpage.jsx'
import CreateAccount from './Forms/CreateAccount.jsx'; // Create Account page component
import SignUp from './Forms/SignIn.jsx'; // Sign Up page component
import UserPage from './Pages/UserPage'; // User Page component

const App = () => {
  const [user, setUser] = useState(null); // User state

  const handleAccountCreated = (userData) => {
    setUser(userData); // Set user data after account creation
  };

  const handleLogin = (userData) => {
    setUser(userData); // Set user data after login
  };


  const handleLogout = () => {
    setUser(null); // Clear user data on logout
  };
  return (
    <Provider store={store}>
    <CartProvider>
    <Routes>
    <Route>
    <Route path="/" element={<Homepage />} />
    <Route path="/aboutus" element={<Aboutus />} />
    <Route path="/cart" element={<Cartpage />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/create-account" element={<CreateAccount onAccountCreated={handleAccountCreated} />} />
        <Route path="/sign-up" element={<SignUp onLogin={handleLogin} />} />
        <Route path="/user" element={<UserPage user={user} />} />
    </Route>
    </Routes>
    </CartProvider>
    </Provider>
  )
}

export default App