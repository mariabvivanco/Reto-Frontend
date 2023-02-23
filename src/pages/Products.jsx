import React, { useEffect, useState, useContext } from 'react';
import {
  Container, Spinner, Row, Col, 
} from 'react-bootstrap';
import { productsServiceInstance } from '..';
import { AppContext } from '../App';
import Item from '../components/products/Item';
import Search from '../components/products/Search';
import Header from '../components/shared/Header';
import { SET_PRODUCTS } from '../reducers/RetoFrontReducer';

import './products.css';

const Products = () => {
  const { state, dispatch } = useContext(AppContext);
  const { products } = state;
  const [filterProducts, setFilterProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  
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

  useEffect(() => {
    if (search !== '') {
      const temp = products.filter(
        (item) => item.brand.toUpperCase().includes(search) 
        || item.model.toUpperCase().includes(search),
      );
      setFilterProducts([...temp]); 
    } else { setFilterProducts([...products]); }
  }, [search, products]);
  
  return (
    <Container>
      <Header />
      <Container className="container-page">
        <Row className="justify-content-between header-catalog">
          <Col xs="12" md="auto">
            <p className="product-model bold">
              Catálogo de Móviles
            </p>
          </Col>
          <Col xs="12" md="auto">
            <Search search={search} setSearch={setSearch} />
          </Col>
        </Row>
        {isLoading ? (
          <Row className="align-me">
            <Col sx="auto">
              <Spinner />
            </Col>
            
          </Row>
        )
          
          : (
            <Row>
              {filterProducts.length > 0 
              && filterProducts.map((item) => <Item key={item.id} product={item} />)}
            </Row>
          )} 
      </Container>
      
    </Container>
  );
};
export default Products;
