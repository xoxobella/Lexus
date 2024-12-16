// CartPage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/CartActions'; // Adjust the path as necessary

const CartPage = () => {
  const cartItems = useSelector((state) => state.cartItems); // Access cart items from Redux store
  const dispatch = useDispatch(); // Get the dispatch function

  const handleDeleteItem = (id) => {
    dispatch(removeFromCart(id)); // Dispatch the action to remove the item
  };  

  const handleBuyNow = () => {
    // Implement your payment logic here
    alert('Proceeding to payment...');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cartItems && cartItems.length > 0 ? (
        <div className="mt-6">
          {cartItems.map((item) => (
            <div key={item.id} className="border-b border-gray-200 py-4 flex justify-between items-center">
              <div className="flex-1">
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-800 font-bold">${item.price.toFixed(2)}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                {item.color && <p className="text-gray-600">Color: {item.color}</p>}
                {item.size && <p className="text-gray-600">Size: {item.size}</p>}
              </div>
              <div className="flex flex-col items-end">
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="text-red-500 hover:text-red-700 mb-2"
                >
                  Cancel Order
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 flex justify-between">
            <button
              onClick={handleBuyNow}
              className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800"
            >
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <p className="mt-6">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;