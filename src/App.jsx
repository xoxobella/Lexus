// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store.js'; 
import Homepage from './Pages/Homepage.jsx';
import ProductDetails from './Product/SofaProduct.jsx';
import Aboutus from './Pages/Aboutus.jsx';
import Cartpage from './Pages/Cartpage.jsx';
import AuthForm from './Forms/Auth.jsx'; // Combined Auth Form component
import Profile from './Pages/Userpage.jsx'; // User Page component

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from db.json or local storage
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  const handleCreate = (newUser) => {
    // Save new user to db.json (you can use fetch or axios to send a POST request)
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUser(newUser);
  };

  const handleSignIn = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Provider store={store}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/auth" element={<AuthForm onCreate={handleCreate} onSignIn={handleSignIn} users={users} />} />
            <Route path="/profile" element={user ? <Profile user={user} onLogout={handleLogout} /> : <Navigate to="/auth" />} />
            <Route path="*" element={<Navigate to="/auth" />} />
            <Route path="/user" element={<Profile />}/>
          </Routes>
    </Provider>
  );
}

export default App;