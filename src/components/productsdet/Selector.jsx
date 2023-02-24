/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/prop-types */
import React from 'react';

import { Dropdown, Row, Col } from 'react-bootstrap';

const Selector = ({
  title, value, setValue, style, options, setStyle, 
}) => {
  return (
    <Dropdown autoClose style={{ verticalAlign: 'center' }}>
      <Dropdown.Toggle
        id={style}
        onPointerOver={() => {
          setStyle('dropdown-button-noactiveT-over');
        }}
        onPointerLeave={() => {
          setStyle('dropdown-button-noactiveT');
        }}
      >
        {value ? value.name : title}
      </Dropdown.Toggle>
      {options && options.length > 1 && (
        <Dropdown.Menu
          rootCloseEvent="click"
          // eslint-disable-next-line react/jsx-boolean-value
          autoClose={true}
          className="drop-selector"
        >
          {options.map((item) => {
            return (
              <Dropdown.Item key={item.code} className="drop-item">
                <Row
                  className="justify-content-between"
                  onClick={() => {
                    const temp = { code: item.code, name: item.name };
                    setValue({ ...temp });
                  }}
                >
                  <Col base="auto" style={{ color: '#2e4003' }}>
                    {item.name}
                    {' '}
                  </Col>
                  <Col base="auto" style={{ marginLeft: '16px' }}>
                    <div
                      className={
                        value && item.name === value.name
                          ? 'selectRad'
                          : 'noSelectRad'
                      }
                    />
                  </Col>
                </Row>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default Selector;
