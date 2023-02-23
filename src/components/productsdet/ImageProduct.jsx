/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';

import { Image } from 'react-bootstrap';
import './productdet.css';

const ImageProduct = ({ image }) => {
  return (
    <div className="contain-image" style={{ height: '630px' }}>
      <div className="principal-image">
        
        <Image id="main-image" src={image} />
        
      </div>
    </div>
  );
};

export default ImageProduct;
