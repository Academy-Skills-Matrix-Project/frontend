import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('Navbar.js renders Navbar', () => {
    render(<Navbar />);
    const testNavbarText = screen.getByText(/Welcome to the Skill Matrix/i);
    expect(testNavbarText).toBeInTheDocument();
});

describe('Navbar.js', () => {
    test('Logo must have src = "./SWO_logo.png" and alt = "SWO_logo"', () => {
      render(<NavHeader/>);
      const logo = screen.getByRole('img');
      expect(logo).toHaveAttribute('src', '/SWO_logo.png');
      expect(logo).toHaveAttribute('alt', 'SWO_logo');
    });
  });