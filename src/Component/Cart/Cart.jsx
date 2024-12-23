// CartPage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/CartActions'; // Adjust the path as necessary

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []); // Ensure a default value
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleBuyNow = () => {
    console.log('Buy Now button clicked - implement payment logic.');
    alert('Proceeding to payment...');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="mt-6">
          {cartItems.map((item) => (
            <div
              key={item.id} // Ensure unique keys
              className="border-b border-gray-200 py-4 flex justify-between items-center"
            >
              <div className="flex-1">
                <p className="text-gray-600">{item.description || 'No description available'}</p>
                <p className="text-gray-800 font-bold">${item.price?.toFixed(2) || '0.00'}</p>
                <p className="text-gray-600">Quantity: {item.quantity || 1}</p>
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
              disabled={!cartItems.length} // Disable if no items in cart
              className={`px-6 py-3 rounded-md font-medium ${
                cartItems.length
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-500 text-gray-300 cursor-not-allowed'
              }`}
            >
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <p className="mt-6 text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
