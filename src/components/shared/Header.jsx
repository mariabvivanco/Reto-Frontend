/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import {
  Navbar, Row, Col, 
} from 'react-bootstrap';
import { AppContext } from '../../App';
import { getPath } from '../../services/utils';
import Basket from '../icons/Basket';
import Breadcrumb from './Breadcrumb';

import './header.css';

const Header = () => {
  // const { productID } = useParams();
  const { state } = useContext(AppContext);
  const { basket_product_count } = state;
  const [style, setStyle] = useState('dropdown-button-noactiveT');
  const [data, setdata] = useState([]);

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
    console.log(state);
  }, []);
  
  return (
    <Navbar fixed="top" className={style}>
      <Row className="justify-content-between">
        <Col xs="4" md="auto">
          <Navbar.Brand href="/products" className="logo">
            <img
              alt=""
              src="/assets/logo.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top menu menu-text-format"
            />
            {' '}
            <span className="color-green logo-name">Móviles</span>
            {' '}
            <span className="logo-desc">a tu medida</span>
          </Navbar.Brand>
          
        </Col>
        <Col xs="4" md="auto">
          
          <Breadcrumb data={data} />
        </Col>
        
        <Col xs="2" className="align-me">
          <Basket />
          {basket_product_count !== 0 && <div className="my-badge">{basket_product_count}</div>}
        </Col>
      </Row>
     
    </Navbar>
  );
};

export default Header;
