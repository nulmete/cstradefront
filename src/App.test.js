import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Test App.js', () => {
  const { getByText } = render(<App />);
  const appText = getByText('App');
  expect(appText).toBeTruthy();
});
