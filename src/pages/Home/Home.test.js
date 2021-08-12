import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('Test Home.js', () => {
  const { getByText } = render(<Home />);
  const homeBtnText = getByText('click');
  expect(homeBtnText).toBeTruthy();
});
