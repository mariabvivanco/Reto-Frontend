/* eslint-disable import/no-cycle */
/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';
import { AppContext } from '../../App';
import Basket from '../icons/Basket';

import './header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { basket_product_count } = state;
  return (
    <Navbar fixed="top" className="header">
      <Row className="justify-content-between">
        <Col xs="4" md="2">
          <Navbar.Brand href="/products">
            <img
              alt=""
              src="/assets/logo.png"
              width="100%"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
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
