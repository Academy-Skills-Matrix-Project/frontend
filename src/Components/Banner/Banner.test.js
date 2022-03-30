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
   expect(bannerParagraph).toHaveTextContent('lori utem asdflkbasd asoih asdioa apsdfpaj dfpjad paijsd fpj asdpfj aspij asdifj aoisjdfoasdf aklsdfio ajdsfldlfkjasdkfnmlkfn. askfbajsdflnasn');
 });

 test('renders Banner onto page', () => {
   render(<Banner/>);
   const bannerTitle = screen.getByText('Skills Matrix Abstract');
   const bannerText = screen.getByText('lori utem asdflkbasd asoih asdioa apsdfpaj dfpjad paijsd fpj asdpfj aspij asdifj aoisjdfoasdf aklsdfio ajdsfldlfkjasdkfnmlkfn. askfbajsdflnasn');
   expect(bannerText).toBeInTheDocument();
   expect(bannerTitle).toBeInTheDocument();
 });

 