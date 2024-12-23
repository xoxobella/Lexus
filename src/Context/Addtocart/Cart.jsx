/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// Context/Addtocart/Cart.jsx
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add an item to the cart
  const addItem = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Update quantity if the item already exists
        return prevItems.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      }
      // Add new item to the cart
      return [...prevItems, { ...item, quantity: item.quantity || 1 }];
    });
  };

  // Delete an item from the cart
  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Update the quantity of a specific item
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      deleteItem(id); // Remove the item if quantity is 0 or less
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItem,
        deleteItem,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
