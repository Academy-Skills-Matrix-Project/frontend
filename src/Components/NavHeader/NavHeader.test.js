import { render, screen } from '@testing-library/react';
import NavHeader from './NavHeader';

//tests to see if the navbar is rendered to the page by using its test id
test('NavHeader.js renders NavHeader', () => {
    render(<NavHeader />);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});


// describe('NavHeader.js', () => {test('Logo must have src = "/MyAccount.png" and alt = "MyAccount"', () => {
//     render(<NavHeader/>);
//     const logo = screen.getByAltText('MyAccount');
//     expect(logo).toHaveAttribute('src', 'MyAccount.png');
//     expect(logo).toHaveAttribute('alt', 'MyAccount');
// });
// });
// describe('NavHeader.js', () => {test('Logo must have src = "/Search.png" and alt = "Search"', () => {
//     render(<NavHeader/>);
//     const logo = screen.getByAltText('Search');
//     expect(logo).toHaveAttribute('src', 'Search.png');
//     expect(logo).toHaveAttribute('alt', 'Search');
// });
// });

//