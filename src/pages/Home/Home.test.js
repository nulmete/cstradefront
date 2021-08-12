import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('Test Home.js', () => {
  const { getByText } = render(<Home />);
  const homeText = getByText('Responsive');
  expect(homeText).toBeTruthy();
});
