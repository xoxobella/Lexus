// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../Redux/authActions';

const Auth = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    bankName: '',
    accountNumber: '',
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(signUp(formData)); // Dispatch sign-up action
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Account Creation Fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Additional Information Fields */}
        <h3 className="text-lg font-semibold mt-6">Additional Information</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your city"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your state"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your ZIP code"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your bank name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your account number"
          />
        </div>

        <button type="submit" disabled={loading} className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200">
          {loading ? 'Signing Up...' : 'Submit'}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Auth;