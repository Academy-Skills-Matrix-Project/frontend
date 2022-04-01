import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Welcome/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe('App.js', () => {test('Logo must have src = "/SWO_logo.png" and alt = "SWO_Logo"', () => {
  render(<App/>);
  const logo = screen.getAllByAltText('SWO_Logo');
  expect(logo).toHaveAttribute('src', 'SWO_logo.png');
  expect(logo).toHaveAttribute('alt', 'SWO_Logo');
});
});