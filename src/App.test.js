import React from 'react';
import { render, screen } from '@testing-library/react';
import NavHeader from './Components/NavHeader/NavHeader';

test('renders learn react link', () => {
  render(<NavHeader />);
  const testNavbarText = screen.getByTestId('navbar');
  expect(testNavbarText).toBeInTheDocument();
});
