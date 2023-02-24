/* eslint-disable class-methods-use-this */
// Peticiones axios relacionadas con los productos

import retoFrontAxios from '../api/retoFrontAxios';

export default class BasketService {
  async addProductBasket(data) {
    const response = await retoFrontAxios({
      method: 'post',
      url: '/cart',
      data,
    });
    return response.data;
  }
}
