// CartPage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useCart } from '../../Context/Addtocart/Cart.jsx'; // Import the useCart hook

const CartPage = () => {
  const { cartitems } = useCart(); // Access the cart items from context

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cartitems && cartitems.length > 0 ? ( // Check if cartitems is defined and has items
        <div className="mt-6">
          {cartitems.map((item) => (
            <div key={item.id} className="border-b border-gray-200 py-4">
              {/* <h2 className="text-lg font-semibold">{item.name}</h2> */}
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-800 font-bold">${item.price.toFixed(2)}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p> {/* Display quantity if available */}
              {item.color && <p className="text-gray-600">Color: {item.color}</p>} {/* Display color if available */}
              {item.size && <p className="text-gray-600">Size: {item.size}</p>} {/* Display size if available */}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-6">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;