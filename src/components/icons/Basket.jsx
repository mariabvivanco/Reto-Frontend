import * as React from 'react';

const Basket = (props, { showShopCart }) => (
  <svg
    width={20}
    height={20}
    fill={showShopCart ? '#739F07' : 'none'}
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <path
      clipRule="evenodd"
      d="M5.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      stroke="#2E4003"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.82 5H19l-1.375 6.712A1.628 1.628 0 0 1 15.99 13H7.341c-.827.007-1.529-.59-1.636-1.392L4.46 2.392c-.107-.796-.8-1.39-1.62-1.392H1"
      stroke="#739F07"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Basket;
