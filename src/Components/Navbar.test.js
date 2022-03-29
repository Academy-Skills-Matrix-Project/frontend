import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('Navbar.js renders Navbar', () => {
    render(<Navbar />);
    const testNavbarText = screen.getByText(/Welcome to the Skill Matrix/i);
    expect(testNavbarText).toBeInTheDocument();
});