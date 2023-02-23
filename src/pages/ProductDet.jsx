import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Spinner, Row, Col, 
} from 'react-bootstrap';
import { productsServiceInstance } from '..';
import { AppContext } from '../App';
import Header from '../components/shared/Header';
import ImageProduct from '../components/productsdet/ImageProduct';
import Description from '../components/productsdet/Description';
import { SET_PRODUCT } from '../reducers/RetoFrontReducer';

import './products.css';
import AllDetails from '../components/productsdet/AllDetails';

const ProductDet = () => {
  const { state, dispatch } = useContext(AppContext);
  const { productID } = useParams();
  const { productDet } = state;
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const loadProduct = async () => {
    setIsLoading(true);
    try {
      const response = await productsServiceInstance.getProductsDetails(
        productID,
      );
      setIsLoading(false);
      dispatch({ type: SET_PRODUCT, payload: response });
    } catch (error) {
      console.log('Ocurrió un error al cargar el producto', productID, error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [productID]);

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
        ) : (
          <Row>
            <Row>
              <Col xs="12" md="6">
                <ImageProduct image={productDet.imgUrl} />
              </Col>
              <Col xs="12" md="6">
                <Description
                  product={productDet}
                  showDetails={showDetails}
                  setShowDetails={setShowDetails}
                />
              </Col>
            </Row>
            <Row>{showDetails && <AllDetails product={productDet} />}</Row>
          </Row>
        )}
      </Container>
    </Container>
  );
};
export default ProductDet;
