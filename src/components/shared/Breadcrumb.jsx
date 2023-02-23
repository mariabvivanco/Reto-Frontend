/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

import { Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Breadcrumb.css';

const BreadcrumbComponent = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Breadcrumb>
      {data && data.map((el, i) => {
        return (
          <Breadcrumb.Item key={el.name} href={el.link} active={i === (data.length - 1)}>
            {(i === data.length - 1) ? (
              <span onClick={() => navigate(el.link)}>{el.name}</span>
            ) : (
              <span>
                {el.name}
              </span>
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
