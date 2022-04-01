import { render, screen } from '@testing-library/react';
import NavHeader from '../Components/NavHeader/NavHeader';

test('NavHeader.js renders NavHeader', () => {
    render(<NavHeader />);
    const testNavbarText = screen.getByTestId('button-div');
    expect(testNavbarText).toBeInTheDocument();
});

// describe('NavHeader.js', () => {test('Logo must have src = "/LogOut.png" and alt = "LogOut"', () => {
//     render(<NavHeader/>);
//     const logo = screen.getByAltText('LogOut');
//     expect(logo).toHaveAttribute('src', 'LogOut.png');
//     expect(logo).toHaveAttribute('alt', 'LogOut');
// });
// });