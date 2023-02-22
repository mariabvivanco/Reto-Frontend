import React, { useEffect, useState, useContext } from 'react';
import {
  Container, Spinner, Row, Col, 
} from 'react-bootstrap';
import { productsServiceInstance } from '..';
import { AppContext } from '../App';
import Item from '../components/products/Item';
import Header from '../components/shared/Header';
import { SET_PRODUCTS } from '../reducers/RetoFrontReducer';

import './products.css';

const Products = () => {
  const { state, dispatch } = useContext(AppContext);
  const { products } = state;
  const [isLoading, setIsLoading] = useState(false);
  
  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const response = await productsServiceInstance.getProducts();
      setIsLoading(false);
      dispatch({ type: SET_PRODUCTS, payload: response });
    } catch (error) {
      console.log('Ocurrió un error al cargar los productos', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);
  
  return (
    <Container>
      <Header />
      <Container className="container-page">
        {isLoading ? (
          <Row className="align-me">
            <Col sx="auto">
              <Spinner />
            </Col>
            
          </Row>
        )
          
          : (
            <Row xs={1} md={3} xl={5}>
              {products.length > 0 && products.map((item) => <Item key={item.id} product={item} />)}
            </Row>
          )} 
      </Container>
      
    </Container>
  );
};
export default Products;
