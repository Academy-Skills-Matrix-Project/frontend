import { render, screen } from '@testing-library/react';
import NavHeader from '../Components/NavHeader/NavHeader';

test('NavHeader.js renders NavHeader', () => {
    render(<NavHeader />);
    const testNavbarText = screen.getByTestId('navbar');
    expect(testNavbarText).toBeInTheDocument();
});
