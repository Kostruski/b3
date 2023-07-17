import { render } from '@testing-library/react';
import React from 'react';
import App from '../src/App';

it('should test', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello React')).toBeInTheDocument();
});
