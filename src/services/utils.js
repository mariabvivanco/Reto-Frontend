/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
// Funciones auxiliares de diferentes módulos

import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export const getPath = (data, setData) => {
  const tempdata = [];
  const URLtemp = window.location.pathname;

  const URLactual = URLtemp.split('/');

  let temp = '';
  for (let i = 1; i <= URLactual.length - 1; i++) {
    temp = `${temp}/${URLactual[i]}`;
    tempdata.push({ name: URLactual[i], link: temp });

    setData([...tempdata]);
  }
};
