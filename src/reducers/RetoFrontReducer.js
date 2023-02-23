/* eslint-disable consistent-return */
// Como su nombre indica contiene las acciones necesarias para manejar los estados de la aplicación;

export const SET_BASKET = 'SET_BASKET';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT = 'SET_PRODUCT';

export const INITIAL_STATE = {
  basket_product_count: 0,
  products: [],
  productDet: {},
  date: null,
};

export const RetoFrontReducer = (state, action) => {
  switch (action.type) {
    case SET_BASKET:
      return {
        ...state,
        basket_product_count: action.payload,
      };   
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        date: new Date(),
      };  
    case SET_PRODUCT:
      return {
        ...state,
        productDet: action.payload,
      };          
          
    default:
      break;
  }
};
