import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import BasketService from './services/BasketService';
import ProductsService from './services/ProductsService';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

export const basketServiceInstance = new BasketService();
export const productsServiceInstance = new ProductsService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
