import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './Context/Addtocart/Cart'; // Adjust the path
import { CurrencyProvider } from './Context/Currency/CurrencyCon.jsx';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <CurrencyProvider>
    <CartProvider>
  <Auth0Provider
    domain="dev-e1oolwkxxfwx73rx.us.auth0.com"
    clientId="qo6iV6ij9PptCV3lHUkfUKwldbZxnfc6"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
      <App />
      </Auth0Provider>,
    </CartProvider>
    </CurrencyProvider>
    </BrowserRouter>
  </StrictMode>,
)
