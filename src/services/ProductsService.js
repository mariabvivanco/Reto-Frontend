/* eslint-disable class-methods-use-this */
// Peticiones axios relacionadas con los productos

import retoFrontAxios from '../api/retoFrontAxios';

export default class ProductsService {
  async getProducts() {
    const response = await retoFrontAxios.get('/product');
    return response.data;
  }

  async getProductsDetails(id) {
    const response = await retoFrontAxios.get(`/product/${id}`);
    return response.data;
  }
}
