import React from 'react';
import Banner from './Components/Banner/Banner';
import LandingForm from './Components/LandingForm/LandingForm';
import './App.css';
import NavHeader from './Components/NavHeader/NavHeader';
import GeneralInfo from './Pages/GeneralInfo';
import SkillsPage from './Pages/SkillsPage';

function App() {
  return (
    <div className='App'>
      {/* applies conditions to the props that will be passed to the navbar */}
     <NavHeader isLogoutEnabled={false} isSearchEnabled={false} isMyAccountEnabled={false}/>
      <Banner />
      <LandingForm /> 
      <GeneralInfo  />
      <SkillsPage />
    </div>
  );
}

export default App;
