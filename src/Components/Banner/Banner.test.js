import { render, screen } from '@testing-library/react';
import Banner from './Banner';

test('banner should have title text Skills Matrix Abstract', () => {
  render(<Banner/>);
  const banner = screen.getByText('Skills Matrix Abstract');
  expect(banner).toHaveTextContent('Skills Matrix Abstract');
})

test('banner should have paragraph text This is card placeholder text', () => {
   render(<Banner/>);
  const bannerParagraph = screen.getByTestId('banner-text')
   expect(bannerParagraph).toHaveTextContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
 });

 test('renders Banner onto page', () => {
   render(<Banner/>);
   const bannerTitle = screen.getByText('Skills Matrix Abstract');
   const bannerText = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
   expect(bannerText).toBeInTheDocument();
   expect(bannerTitle).toBeInTheDocument();
 });

 