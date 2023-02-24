// Declaración de las rutas existentes

import Products from '../pages/Products';
import ProductDet from '../pages/ProductDet';

const routes = {
  private: [],
  public: [
    {
      path: '/products',
      name: 'products',
      Component: Products,
    },
    {
      path: '/product/:productID',
      name: 'productdet',
      Component: ProductDet,
    },
  ],
};

export default routes;
