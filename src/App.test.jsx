import React from 'react';
import { render } from '@testing-library/react';
import Search from './components/products/Search';

test('find search component', () => {
  const { getByText, getByPlaceholderText } = render(
    <Search search="Color" setSearch={() => {}} />,
  );

  const input = getByPlaceholderText('Buscar marca y modelo');
  expect(input).toBeInTheDocument();
  expect(input.getAttribute('id')).toBe('search-bar-order');

  const button = getByText('Buscar');
  expect(button).toBeInTheDocument();
});
