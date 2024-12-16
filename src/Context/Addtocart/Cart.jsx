/* eslint-disable no-unused-vars */
   // CartContext.js
   import React, { createContext, useContext, useState } from 'react';

   const CartContext = createContext();

   export const CartProvider = ({ children }) => {
     const [cartitems, setCartItems] = useState([]); // Initialize cartitems as an empty array

     const addToCart = (item) => {
       setCartItems((prevItems) => [...prevItems, item]); // Add the new item to the cart
     };

     return (
       <CartContext.Provider value={{ cartitems, addToCart }}>
         {children}
       </CartContext.Provider>
     );
   };

   export const useCart = () => {
     return useContext(CartContext);
   };