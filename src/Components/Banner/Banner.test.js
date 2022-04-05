import { render, screen } from '@testing-library/react';
import Banner from './Banner';

test('banner should have title text Welcome to the Skill Matrix', () => {
  render(<Banner/>);
  const banner = screen.getByText('Welcome to the Skill Matrix');
  expect(banner).toHaveTextContent('Welcome to the Skill Matrix');
})

test('banner should have paragraph text This is card placeholder text', () => {
   render(<Banner/>);
  const bannerParagraph = screen.getByTestId('banner-text')

   expect(bannerParagraph).toHaveTextContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit. Morbi tristique senectus et netus et malesuada fames ac. Sodales neque sodales ut etiam sit amet nisl purus in. Posuere ac ut consequat semper viverra nam libero justo. Nunc mattis enim ut tellus elementum sagittis vitae et. A lacus vestibulum sed arcu non odio euismod lacinia at. Amet volutpat consequat mauris nunc congue. Maecenas ultricies mi eget mauris pharetra et. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse.');

 });

 test('renders Banner onto page', () => {
   render(<Banner/>);

   const bannerTitle = screen.getByText('Welcome to the Skill Matrix');
   const bannerText = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit. Morbi tristique senectus et netus et malesuada fames ac. Sodales neque sodales ut etiam sit amet nisl purus in. Posuere ac ut consequat semper viverra nam libero justo. Nunc mattis enim ut tellus elementum sagittis vitae et. A lacus vestibulum sed arcu non odio euismod lacinia at. Amet volutpat consequat mauris nunc congue. Maecenas ultricies mi eget mauris pharetra et. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse.');

   expect(bannerText).toBeInTheDocument();
   expect(bannerTitle).toBeInTheDocument();
 });

 