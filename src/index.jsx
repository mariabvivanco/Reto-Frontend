import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RoutesApp from './routes';
import BasketService from './services/BasketService';
import ProductsService from './services/ProductsService';

export const basketServiceInstance = new BasketService();
export const productsServiceInstance = new ProductsService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>,
);

reportWebVitals();
