// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';

// Currency configuration
export const CURRENCY_CONFIG = {
  USD: { symbol: '$', rate: 1 }, // Base currency
  AUD: { symbol: 'AUD $', rate: 1.5 },
  JPY: { symbol: '¥', rate: 110 },
};

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD'); // Default currency is USD

  // Function to convert a price to the selected currency
  const convertPrice = (priceInUSD) => {
    const { symbol, rate } = CURRENCY_CONFIG[currency];
    return {
      symbol,
      price: (priceInUSD * rate).toFixed(2), // Convert and format to 2 decimals
    };
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  return useContext(CurrencyContext);
};
