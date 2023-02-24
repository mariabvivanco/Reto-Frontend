/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

// Breadcup del header
import React from 'react';

import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Breadcrumb.css';

const BreadcrumbComponent = ({ data }) => {
  return (
    <Breadcrumb>
      {data
        && data.map((el, i) => {
          return (
            <Breadcrumb.Item
              key={el.name}
              href={el.link}
              active={i === data.length - 1}
              linkAs={Link}
              linkProps={{ to: el.link }}
            >
              {el.name === 'product' || el.name === 'products'
                ? 'Catálogo de Móviles'
                : el.name}
            </Breadcrumb.Item>
          );
        })}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
