// store.js
import { createStore } from 'redux';
import cartReducer from '../Redux/CartReducer'; // Adjust the path as necessary

const store = createStore(cartReducer);

export default store;