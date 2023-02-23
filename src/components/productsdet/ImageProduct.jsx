/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';

import { Stack, Image } from 'react-bootstrap';
import './productdet.css';

const ImageProduct = ({ image }) => {
  return (
    <div className="contain-image" style={{ height: '630px' }}>
      <div className="principal-image">
        <Stack direction="horizontal" style={{ alignItems: 'start' }}>
          <Image id="main-image" src={image} />
                      
        </Stack>
      </div>
    
    </div>
  );
};

export default ImageProduct;
