import React from 'react';
import { render, screen } from '@testing-library/react';
import NavHeader from '../Components/NavHeader/NavHeader';

test('NavHeader.js renders NavHeader', () => {
    render(<NavHeader />);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});

// describe('NavHeader.js', () => {test('Logo must have src = "/SWO_logo.png" and alt = "SWO_Logo"', () => {
//     render(<NavHeader/>);
//     const logo = screen.getByAltText('SWO_Logo');
//     expect(logo).toHaveAttribute('src', 'SWO_logo.png');
//     expect(logo).toHaveAttribute('alt', 'SWO_Logo');
// });
// });

// describe('NavHeader.js', () => {test('Logo must have src = "/LogOut.png" and alt = "LogOut"', () => {
//     render(<NavHeader/>);
//     const logo = screen.getByAltText('LogOut');
//     expect(logo).toHaveAttribute('src', 'LogOut.png');
//     expect(logo).toHaveAttribute('alt', 'LogOut');
// });
// });
