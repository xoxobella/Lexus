import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './Context/Addtocart/Cart'; // Adjust the path
import { CurrencyProvider } from './Context/Currency/CurrencyCon.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <CurrencyProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </CurrencyProvider>
    </BrowserRouter>
  </StrictMode>,
)
