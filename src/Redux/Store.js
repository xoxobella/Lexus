// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Redux/CartReducer';
import authReducer from '../Redux/authReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
