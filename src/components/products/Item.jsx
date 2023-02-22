/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Card, Col, Row, Button, 
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
  const navigate = useNavigate();
  const [changeColor, setChangeColor] = useState('changeButtomSelectNo'); 
  return (
    <Col className="container-card-product">
      <Card className="card-product pointer">
        <div className="card-image-mine">
          <Card.Img
            variant="top" 
            src={product.imgUrl} 
            style={{ borderRadius: '16px' }}
          />
          <div className="image_overlay">
            <Button
              id={changeColor}
              className="blog-button"
              style={{ marginBottom: '20px' }}
              onMouseOver={() => { setChangeColor('changeButtomSelect'); }} 
              onMouseOut={() => { setChangeColor('changeButtomSelectNo'); }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              Ver artículo

            </Button>
          </div>
        </div>
        <Card.Body>
          <Card.Title>{product.brand}</Card.Title>
          <Row className="justify-content-between">            
            <Col xs="auto">
              <Card.Text>
                {product.model}
              </Card.Text>
            </Col>
            <Col xs="auto">
              <Card.Text className="bold">
                {product.price}
                €
              </Card.Text>
            </Col>
          </Row>
        
        </Card.Body>
        
      </Card>
    </Col>
  );
};

export default Item;
