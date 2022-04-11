import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';


 test('renders Banner onto page', () => {
   render(<Banner/>);
   const banner = getByTestId('banner');
   expect(banner).toBeInTheDocument();
 });

 test('banner render', () => {
   render(<Banner />)
   const banner = screen.debug();
 })