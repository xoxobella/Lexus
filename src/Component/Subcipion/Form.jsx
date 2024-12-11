/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Subscribe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    marketingConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate email
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
      setFormData({
        firstName: '',
        email: '',
        marketingConsent: false
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error and success messages when user starts typing
    setError('');
    setSuccess(false);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Subscribe to our emails
        </h2>
        <p className="text-gray-600 mb-8">
          Be the first to know about new collections and exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className={`flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent
                ${error ? 'border-red-300' : 'border-gray-300'}`}
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent
                ${error ? 'border-red-300' : 'border-gray-300'}`}
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto bg-green-800 text-white px-8 py-2 rounded-full transition-all duration-200 
                ${isSubmitting 
                  ? 'opacity-75 cursor-not-allowed' 
                  : 'hover:bg-green-700 hover:shadow-md active:transform active:scale-95'}`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  SIGNING UP...
                </span>
              ) : 'SIGN UP'}
            </button>
          </div>

          {error && (
            <p className="text-red-600 text-sm mt-2 text-left">{error}</p>
          )}

          {success && (
            <p className="text-green-600 text-sm mt-2 text-left">
              Thank you for subscribing! Check your email for confirmation.
            </p>
          )}

          <div className="text-left space-y-4">
            <p className="text-sm text-gray-600">
              By clicking 'Sign up' you agree that you have read and understood Koala's{' '}
              <a 
                href="/privacy-policy" 
                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
              >
                Privacy Policy
              </a>
              .
            </p>

            <div className="flex items-start">
              <input
                type="checkbox"
                name="marketingConsent"
                id="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleChange}
                disabled={isSubmitting}
                className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
              />
              <label
                htmlFor="marketingConsent"
                className="ml-2 text-sm text-gray-600 cursor-pointer"
              >
                I agree to receive marketing communications and product updates from Koala.
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;