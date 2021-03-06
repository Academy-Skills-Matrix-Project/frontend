import React from 'react';
import { render, screen } from '@testing-library/react';
import NavHeader from './Components/NavHeader/NavHeader';
import {MemoryRouter} from 'react-router-dom';
import {act} from 'react-dom/test-utils';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
        <NavHeader />
    </MemoryRouter>);
  const testNavbarText = screen.getByTestId('navbar');
  expect(testNavbarText).toBeInTheDocument();
});


