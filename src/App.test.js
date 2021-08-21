import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Test App.js', () => {
  const { getByText } = render(<App />);
  const homeBtnText = getByText('Sumar 1');
  expect(homeBtnText).toBeTruthy();
});
