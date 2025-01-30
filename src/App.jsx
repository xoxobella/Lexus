// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store.js'; 
import Homepage from './Pages/Homepage.jsx';
import ProductDetails from './Product/SofaProduct.jsx';
import Aboutus from './Pages/Aboutus.jsx';
import Cartpage from './Pages/Cartpage.jsx';
import AuthForm from './Forms/Auth.jsx'; // Combined Auth Form component
import Profile from './Pages/Userpage.jsx'; // User Page component
import Mattress from './Product/MattressProduct.jsx'
import Productpage from "./Pages/Productpage.jsx";
import  NotFound  from './Pages/404page.jsx';

const App = () => {
  return (
    <Provider store={store}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/productpage"element={<Productpage />} />
            <Route path="/notfound"element={<NotFound />} />
            <Route path="/auth"element={<AuthForm />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/Mattress/:id" element={<Mattress />} />
            <Route path="/user" element={<Profile />}/>
          </Routes>
    </Provider>
  );
}

export default App;