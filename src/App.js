import React from 'react';
import Banner from './Components/Banner/Banner';
import LandingForm from './Components/LandingForm/LandingForm';
import './App.css';
import NavHeader from './Components/NavHeader/NavHeader';
import GeneralInfo from './Pages/GeneralInfo';
import SkillsPage from './Pages/SkillsPage';
import ProfileInfoPage from './Pages/ProfileInfoPage';

function App() {
  return (
    <div className='App'>
      {/* applies conditions to the props that will be passed to the navbar */}
     {/* <NavHeader isLogoutEnabled={false} isSearchEnabled={false} isMyAccountEnabled={false}/>
       <Banner title="Welcome to the Skill Matrix" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit. Morbi tristique senectus et netus et malesuada fames ac. Sodales neque sodales ut etiam sit amet nisl purus in. Posuere ac ut consequat semper viverra nam libero justo. Nunc mattis enim ut tellus elementum sagittis vitae et. A lacus vestibulum sed arcu non odio euismod lacinia at. Amet volutpat consequat mauris nunc congue. Maecenas ultricies mi eget mauris pharetra et. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse."/> */}
      {/* <LandingForm /> 
      <GeneralInfo  />
      <SkillsPage /> */}
      <ProfileInfoPage/>
      
    </div>
  );
}

export default App;
