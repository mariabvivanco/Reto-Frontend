/* eslint-disable max-len */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
// eslint-disable-next-line max-len
import React, { useState, useEffect, useContext } from 'react';

import {
  Row, Col, Stack, Button, 
} from 'react-bootstrap';

import ShareIcon from '../icons/ShareIcon';
import Right from '../icons/Right';

import Selector from './Selector';
import { basketServiceInstance } from '../..';
import { AppContext } from '../../App';
import { SET_BASKET } from '../../reducers/RetoFrontReducer';

const Description = ({ product, setShowDetails, showDetails }) => {
  // eslint-disable-next-line no-unused-vars
  const { dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [styleColors, setStyleColors] = useState('dropdown-button-noactiveT');
  const [color, setColor] = useState();

  const [styleDimension, setStyleDimension] = useState(
    'dropdown-button-noactiveT',
  );
  const [dimension, setDimension] = useState();

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
    <>
      <Row className="justify-content-between contain-description">
        <Col xs="auto">
          <p className="marca pt-3">
            {'Marca:   '}
            <span className="marca-number">{product.brand}</span>
          </p>
        </Col>
        <Col xs="auto">
          <Stack direction="horizontal">
            <p className="share-name pt-3">Compartir</p>
            <ShareIcon />
          </Stack>
        </Col>
      </Row>
      <Row className="justify-content-between">
        <Col md="12">
          <p className="product-model bold">
            {'Modelo: '}
            <span className="no-bold">{product.model}</span>
          </p>

          <p className="product-price bold">
            Precio :
            <span className="no-bold">{product.price}</span>
            €
          </p>
          <p className="product-description bold">
            {'CPU: '}
            <span className="no-bold">{product.cpu}</span>
          </p>
          <p className="product-description bold">
            {'RAM: '}
            <span className="no-bold">{product.ram}</span>
          </p>
          <p className="product-description bold">
            {'Sistema Operativo: '}
            <span className="no-bold">{product.os}</span>
          </p>
          <p className="product-description bold">
            {'Resolución de Pantalla: '}
            <span className="no-bold">{product.displayResolution}</span>
          </p>
          <p className="product-description bold">
            {'Batería: '}
            <span className="no-bold">{product.battery}</span>
          </p>
          <p className="product-description bold">
            {'Cámara Primaria: '}
            <span className="no-bold">
              {product.primaryCamera
                && product.primaryCamera.length > 0
                && product.primaryCamera[0]}
            </span>
          </p>
          <p className="product-description bold">
            {'Cámara Secundaria: '}
            <span className="no-bold">
              {product.primaryCamera
                && product.primaryCamera.length > 0
                && product.primaryCamera[0]}
            </span>
          </p>
          <p className="product-description bold">
            {'Dimensiones: '}
            <span className="no-bold">{product.displaySize}</span>
          </p>
        </Col>
      </Row>
      <Row className="justify-content-between">
        <Col xs="6" md="6" className="align-center">
          <Selector
            title="Colores"
            value={color}
            setValue={setColor}
            options={product.options && product.options.colors ? product.options.colors : []}
            style={styleColors}
            setStyle={setStyleColors}
          />
        </Col>
        <Col xs="6" md="6" className="align-center">
          <Selector
            title="Dimensiones"
            value={dimension}
            setValue={setDimension}
            options={product.options && product.options.storages ? product.options.storages : []}
            style={styleDimension}
            setStyle={setStyleDimension}
          />
        </Col>
      </Row>
      <Row className="justify-content-center basket">
        <Col xs="auto">
          <Button disabled={(!(color && dimension) || isLoading)} onClick={() => addBasket(product)}>Añadir a la cesta</Button>
        </Col>
      </Row>
      <Row className="justify-content-left product-det">
        <Col
          md="auto"
          style={{ marginTop: '30px', fontSize: '16px', fontWeight: '400' }}
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          <span className="pointer">
            {showDetails ? 'Ocultar detalles del producto   ' : 'Ver detalles del producto   '}
            <Right fill="#FFFFFF" />
          </span>
        </Col>
      </Row>
    </>
  );
};

export default Description;
