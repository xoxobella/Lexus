import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/CartActions'; // Adjust the path as necessary

const CartCheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []); // Ensure a default value
  const dispatch = useDispatch();

  const [shippingAddress, setShippingAddress] = useState("221B Baker Street, W1U 8ED\nLondon, United Kingdom");
  const [isAddressSaved, setIsAddressSaved] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState("");
  const [gpayUrl, setGpayUrl] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleDeleteItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleBuyNow = () => {
    console.log('Buy Now button clicked - implement payment logic.');
    alert('Proceeding to payment...');
  };

  const handleSaveAddress = () => {
    setIsAddressSaved(true);
  };

  // Calculate total price of products
  const totalProductPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  // Shipping charges
  const shippingCharges = totalProductPrice > 0 ? 10.0 : 0; // Example: $10 shipping if items are in the cart

  // Final total amount
  const totalAmount = totalProductPrice + shippingCharges;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold">Shopping Cart & Checkout</h1>
      {cartItems.length > 0 ? (
        <div className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Cart Section */}
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id} // Ensure unique keys
                  className="border-b border-gray-200 py-4 flex justify-between items-center"
                >
                  <div className="flex-1">
                    <p className="text-gray-600">
                      {item.description || 'No description available'}
                    </p>
                    <p className="text-gray-800 font-bold">
                      ${item.price?.toFixed(2) || '0.00'} x {item.quantity || 1}
                    </p>
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
              <button
                onClick={() => setShowForm(!showForm)}
                className="block lg:hidden px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 mt-4"
              >
                {showForm ? "Hide Checkout Form" : "Show Checkout Form"}
              </button>
            </div>

            {/* Checkout Section */}
            <div className={`bg-gray-100 p-6 rounded-md shadow-md ${!showForm && "hidden lg:block"}`}>
              <h2 className="text-xl font-bold mb-4">Checkout</h2>

              {/* Shipping Address */}
              <div className="border-b pb-4 mb-4">
                <p className="text-sm font-semibold mb-2">SHIPPING</p>
                <textarea
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  disabled={isAddressSaved}
                  className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-200"
                  rows="3"
                />
                {!isAddressSaved && (
                  <button
                    onClick={handleSaveAddress}
                    className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                  >
                    Save Address
                  </button>
                )}
              </div>

              {/* Payment Method */}
              <div className="border-b pb-4 mb-4">
                <p className="text-sm font-semibold mb-2">PAYMENT METHOD</p>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="mr-2"
                    />
                    Card Payment
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="gpay"
                      checked={paymentMethod === "gpay"}
                      onChange={() => setPaymentMethod("gpay")}
                      className="mr-2"
                    />
                    Google Pay
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="mr-2"
                    />
                    Cash on Delivery
                  </label>
                </div>

                {paymentMethod === "card" && (
                  <textarea
                    value={cardDetails}
                    onChange={(e) => setCardDetails(e.target.value)}
                    placeholder="Enter Card Details"
                    className="w-full mt-2 p-2 border rounded-md focus:ring focus:ring-indigo-200"
                    rows="3"
                  />
                )}

                {paymentMethod === "gpay" && (
                  <textarea
                    value={gpayUrl}
                    onChange={(e) => setGpayUrl(e.target.value)}
                    placeholder="Enter Google Pay URL"
                    className="w-full mt-2 p-2 border rounded-md focus:ring focus:ring-indigo-200"
                    rows="3"
                  />
                )}
              </div>

              <div className="border-b pb-4 mb-4">
                <p className="text-sm font-semibold">PAYMENT DETAILS</p>
                <div className="flex justify-between text-gray-800 font-bold">
                  <span>Subtotal:</span>
                  <span>${totalProductPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-800 font-bold">
                  <span>Shipping:</span>
                  <span>${shippingCharges.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-800 font-bold">
                  <span>Tax:</span>
                  <span>${(totalProductPrice * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-800 font-bold mt-4">
                  <span>Total Amount:</span>
                  <span>${(totalAmount + totalProductPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleBuyNow}
                  className="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="mt-6 text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartCheckoutPage;
