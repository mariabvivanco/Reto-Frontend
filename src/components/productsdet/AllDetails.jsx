/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Row, Stack } from 'react-bootstrap';
import CircleI from '../icons/Circle';

const AllDetails = ({ product }) => {
  // const [showFeatures, setShowFeatures] = useState(5);
  const [details, setDetails] = useState([]);

  const jsonArrayConvert = (json) => {
    const array = [];

    for (const clave in json) {
      if (clave !== 'options') {
        array.push({ name: clave, value: json[clave] });
      }
    }
    setDetails([...array]);
  };

  useEffect(() => {
    jsonArrayConvert(product);
  }, [product]);

  return (
    <Row className="all-detail-card">
      <div className="product-model">Detalles del producto</div>
      <div className="half-width">
        <p className="sub-title ">Características</p>
        <p>
          {' '}
          Este producto está diseñado y elaborado con materiales de calidad para
          garantizar su durabilidad y resistencia con el paso del tiempo.
        </p>
        {details.length > 0
          && details.map((el) => {
            return (
              <Stack
                direction="horizontal"
                style={{ alignItems: 'start' }}
                gap={3}
              >
                <div>
                  <CircleI fill="#739F07" />
                </div>
                <p className="">{`${el.name}:  ${el.value}`}</p>
              </Stack>
            );
          })}
      </div>
    </Row>
  );
};

export default AllDetails;
