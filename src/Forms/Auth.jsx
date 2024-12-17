// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

const steps = [
  { label: 'User Name', fields: ['username'] },
  { label: 'Location', fields: ['address', 'city', 'state', 'zip'] },
  { label: 'Bank Details', fields: ['bankName', 'accountNumber'] },
  { label: 'Verification', fields: [] },
];

const Auth = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    username: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    bankName: '',
    accountNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:3000/profiles', formData);
      console.log('Profile saved:', response.data);
      // Optionally reset the form
      setFormData({
        username: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        bankName: '',
        accountNumber: '',
      });
    } catch (error) {
      console.error('Error saving profile:', error); // Log the error for debugging
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Your Profile</h2>
      <div className="flex mb-4">
        {steps.map((step, index) => (
          <div key={index} className={`flex-1 text-center ${index <= currentStep ? 'text-green-500' : 'text-gray-400'}`}>
            <div className="font-bold">{index + 1}</div>
            <div className="text-sm">{step.label}</div>
          </div>
        ))}
      </div>
      <form onSubmit={currentStep === steps.length - 1 ? handleSubmit : (e) => e.preventDefault()}>
        {steps[currentStep].fields.map((field, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{field.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required={field !== 'bankName' && field !== 'accountNumber'} // Make bank fields optional
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
            />
          </div>
        ))}
        <div className="flex justify-between">
          {currentStep > 0 && (
            <button type="button" onClick={handlePrevious} className="text-gray-500 hover:text-gray-700">
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button type="button" onClick={handleNext} className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200">
              Next
            </button>
          ) : (
            <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Auth;