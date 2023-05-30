import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './context/cart';
import { ProductFavoriteProvider } from './context/productFavorite';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductFavoriteProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductFavoriteProvider>
    </BrowserRouter>
  </React.StrictMode >,
)