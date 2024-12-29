/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useCurrency } from '../../Context/Currency/CurrencyCon';

const CurrencyChanger = () => {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);

  const currencies = [
    { code: 'AUD', name: 'Australia', symbol: 'AUD $', flag: '🇦🇺' },
    { code: 'USD', name: 'United States', symbol: 'USD $', flag: '🇺🇸' },
    { code: 'JPY', name: 'Japan', symbol: 'JPY ¥', flag: '🇯🇵' },
  ];

  const handleCurrencyChange = (code) => {
    setCurrency(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Current Selection */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 border rounded-lg"
      >
        {currencies.find((c) => c.code === currency)?.flag} {currency}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white shadow-md border rounded-lg">
          {currencies.map((curr) => (
            <button
              key={curr.code}
              onClick={() => handleCurrencyChange(curr.code)}
              className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              <span className="mr-2">{curr.flag}</span>
              <span>{curr.name}</span>
              <span className="ml-auto">{curr.symbol}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyChanger;
