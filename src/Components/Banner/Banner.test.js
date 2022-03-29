import { render, screen } from '@testing-library/react';
import Banner from './Banner';

test('renders banner component', () => {
  render(<Banner />);
//   const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});