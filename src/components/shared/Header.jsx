/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
/* eslint-disable camelcase */

// Header del proyecto
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Row, Col } from 'react-bootstrap';
import { AppContext } from '../../App';
import { getPath } from '../../services/utils';
import Basket from '../icons/Basket';
import Breadcrumb from './Breadcrumb';

import './header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { basket_product_count } = state;
  const [style, setStyle] = useState('header');
  const [data, setdata] = useState([]);
  const isMobile = window.matchMedia(
    'only screen and (max-width: 760px)',
  ).matches;

  const listenScrollEvent = () => {
    if (window.scrollY > 50) {
      setStyle('header-opa');
    } else {
      setStyle('header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    getPath(data, setdata);
  }, []);

  return (
    <Navbar fixed="top" className={style}>
      <Row className="justify-content-between">
        <Col base="auto" className="align-me">
          <Link to="/products" replace className="logo">
            <img
              alt=""
              src="/assets/logo.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top menu menu-text-format"
            />
            {' '}
            {!isMobile && (
              <span className="color-green logo-name">Móviles</span>
            )}
            {' '}
            {!isMobile && <span className="logo-desc">a tu medida</span>}
          </Link>
        </Col>
        <Col base="auto" className="align-me">
          <Breadcrumb data={data} />
        </Col>

        <Col base="auto" className="align-me">
          <Basket />
          {basket_product_count !== 0 && (
            <div className="my-badge">{basket_product_count}</div>
          )}
        </Col>
      </Row>
    </Navbar>
  );
};

export default Header;
