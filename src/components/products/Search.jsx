/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Row, Col, Button, Stack, InputGroup, FormControl,
} from 'react-bootstrap';
import { useDebounce } from '../../services/utils';
import SearchI from '../icons/SearchI';

import './products.css';

const Search = ({ search, setSearch }) => {
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const temp = debouncedSearch;
    setSearch(temp.toUpperCase());
  }, [debouncedSearch]);

  const searchValueChangeHandler = (val) => {    
    setSearch(val);
  };
  return (
   
    <Row>
      <Stack className="art-count-order" direction="horizontal">
        <Col md="auto">
          <InputGroup id="search-order" className="mb-3">
            <InputGroup.Text id="search-icon">
              <SearchI />
            </InputGroup.Text>
            <FormControl
              id="search-bar-order"
              placeholder="Buscar marca y modelo"
              onChange={(event) => {
                const temp = event.target.value;
                searchValueChangeHandler(temp); 
              }}
            />
          </InputGroup>
        </Col>
                        
        <Col md="auto">
          <Button
            disabled={search === ''}
            variant="primary"
            className="btnProfileCat"
            size="sm"
            onClick={() => { setSearch(search); }}
            
          >
            Buscar
          </Button> 
        </Col>
                    
      </Stack>
                    
    </Row>
           
  );
};

export default Search;
