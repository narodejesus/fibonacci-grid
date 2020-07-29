import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/50x50 Grid Fibonacci checker exam by Onar De jesus/i);
  expect(linkElement).toBeInTheDocument();
});
