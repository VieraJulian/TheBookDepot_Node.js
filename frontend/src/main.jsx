import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './context/cart';
import { ProductFavoriteProvider } from './context/productFavorite';
import { ProductSavedProvider } from './context/productSaved';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ProductSavedProvider>
          <ProductFavoriteProvider>
            <App />
          </ProductFavoriteProvider>
        </ProductSavedProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode >,
)