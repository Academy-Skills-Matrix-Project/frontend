import { render, screen } from '@testing-library/react';
import Banner from './Banner';

test('banner should have title text', () => {
  render(<Banner/>);
  const banner = screen.getByText('Skills Matrix Abstract');

  expect(banner).toHaveTextContent('Skills Matrix Abstract');
})

 /*test('banner should have a paragraph text', () => {
   render(<Banner/>);
  const bannerParagraph = screen.getByText(/lori utem  asdflkbasd as;oih asdioa apsdfpaj dfpjad paijsd fpj asdpfj aspij asdifj aoi;sjdf;oasdf aklsdfio ajdsf;l;dlfkjasdkfnmlkfn. as;kfb;ajsdflnasn, /i)
   expect(bannerParagraph).toBeInTheDocument();
 })*/

 test('banner should have a paragraph text', () => {
  render(<Banner/>);
  const bannerParagraph = screen.getByText('lori utem  asdflkbasd asoih asdioa apsdfpaj dfpjad paijsd fpj asdpfj aspij asdifj aoisjdfoasdf aklsdfio ajdsfldlfkjasdkfnmlkfn. askfbajsdflnasn')
  expect(bannerParagraph).toHaveTextContent('lori utem  asdflkbasd asoih asdioa apsdfpaj dfpjad paijsd fpj asdpfj aspij asdifj aoisjdfoasdf aklsdfio ajdsfldlfkjasdkfnmlkfn. askfbajsdflnasn');
})