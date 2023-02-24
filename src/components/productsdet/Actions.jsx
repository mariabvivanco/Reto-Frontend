/* eslint-disable react/prop-types */
// Acciones de seleccionar opciones y añadir  a la cesta
import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Selector from './Selector';

import { basketServiceInstance } from '../..';
import { AppContext } from '../../App';
import { SET_BASKET } from '../../reducers/RetoFrontReducer';

const Actions = ({ product }) => {
  const { dispatch } = useContext(AppContext);
  const [styleDimension, setStyleDimension] = useState(
    'dropdown-button-noactiveT',
  );
  const [color, setColor] = useState();

  const [dimension, setDimension] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [styleColors, setStyleColors] = useState('dropdown-button-noactiveT');

  const addBasket = async () => {
    setIsLoading(true);
    try {
      const response = await basketServiceInstance.addProductBasket({
        id: product.id,
        colorCode: color.code,
        storageCode: dimension.code,
      });
      dispatch({ type: SET_BASKET, payload: response.count });
    } catch (error) {
      console.log('Ocurrio un error al intentar adicionar a la ceta');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (
      product.options
      && product.options.colors
      && product.options.colors.length === 1
    ) {
      setColor(product.options.colors[0]);
    }
    if (
      product.options
      && product.options.storages
      && product.options.storages.length === 1
    ) {
      setDimension(product.options.storages[0]);
    }
  }, []);
  return (
    <div>
      {' '}
      <Row className="justify-content-between">
        <Col xs="6" md="6" className="align-center mt-5">
          <Selector
            title="Colores"
            value={color}
            setValue={setColor}
            options={
              product.options && product.options.colors
                ? product.options.colors
                : []
            }
            style={styleColors}
            setStyle={setStyleColors}
          />
        </Col>
        <Col xs="6" md="6" className="align-center mt-5">
          <Selector
            title="Almacenamiento"
            value={dimension}
            setValue={setDimension}
            options={
              product.options && product.options.storages
                ? product.options.storages
                : []
            }
            style={styleDimension}
            setStyle={setStyleDimension}
          />
        </Col>
      </Row>
      <Row className="justify-content-center basket">
        <Col xs="auto" className="align-center">
          <Button
            disabled={!(color && dimension) || isLoading}
            onClick={() => addBasket(product)}
          >
            Añadir a la cesta
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Actions;
