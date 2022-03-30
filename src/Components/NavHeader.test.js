import { render, screen } from '@testing-library/react';
import NavHeader from './NavHeader';

test('NavHeader.js renders NavHeader', () => {
    render(<NavHeader />);
    const testNavbarText = screen.getByText(/Welcome to the Skill Matrix/i);
    expect(testNavbarText).toBeInTheDocument();
});

describe('NavHeader.js', () => {test('Logo must have src = "/SWO_logo.png" and alt = "SWO_Logo"', () => {
    render(<NavHeader/>);
    const logo = screen.getByAltText('SWO_Logo');
    expect(logo).toHaveAttribute('src', 'SWO_logo.png');
    expect(logo).toHaveAttribute('alt', 'SWO_Logo');
});
});

test('Does not render Login, Search, or My Account button', () => {
    render(<NavHeader />);

})

describe('NavHeader.js', () => {test('Logo must have src = "/MyAccount.png" and alt = "MyAccount"', () => {
    render(<NavHeader/>);
    const logo = screen.getByAltText('MyAccount');
    expect(logo).toHaveAttribute('src', 'MyAccount.png');
    expect(logo).toHaveAttribute('alt', 'MyAccount');
});
});

describe('NavHeader.js', () => {test('Logo must have src = "/Search.png" and alt = "Search"', () => {
    render(<NavHeader/>);
    const logo = screen.getByAltText('Search');
    expect(logo).toHaveAttribute('src', 'Search.png');
    expect(logo).toHaveAttribute('alt', 'Search');
});
});

describe('NavHeader.js', () => {test('Logo must have src = "/LogOut.png" and alt = "LogOut"', () => {
    render(<NavHeader/>);
    const logo = screen.getByAltText('LogOut');
    expect(logo).toHaveAttribute('src', 'LogOut.png');
    expect(logo).toHaveAttribute('alt', 'LogOut');
});
});
