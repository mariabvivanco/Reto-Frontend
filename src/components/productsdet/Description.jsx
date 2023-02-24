/* eslint-disable max-len */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
// eslint-disable-next-line max-len

// Descripción Básica del Producto

import React from 'react';

import { Row, Col, Stack } from 'react-bootstrap';

import ShareIcon from '../icons/ShareIcon';
import Right from '../icons/Right';

import Actions from './Actions';

const Description = ({ product, setShowDetails, showDetails }) => {
  // eslint-disable-next-line no-unused-vars

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
          <Stack direction="horizontal" gap={2}>
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
            {'Almacenamiento: '}
            <span className="no-bold">{product.displaySize}</span>
          </p>
        </Col>
      </Row>

      <Actions product={product} />

      <Row className="justify-content-left product-det">
        <Col
          md="auto"
          style={{ marginTop: '30px', fontSize: '16px', fontWeight: '400' }}
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          <span className="pointer">
            {showDetails
              ? 'Ocultar detalles del producto   '
              : 'Ver detalles del producto   '}
            <Right fill="#FFFFFF" />
          </span>
        </Col>
      </Row>
    </>
  );
};

export default Description;
