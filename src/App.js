import React from 'react';
import Banner from './Components/Banner/Banner';
import LandingForm from './Components/LandingForm/LandingForm';
import './App.css';
import NavHeader from './Components/NavHeader/NavHeader';

function App() {
  return (
    <div className="App">
      {/* applies conditions to the props that will be passed to the navbar */}
      <NavHeader isLogoutEnabled={false} isSearchEnabled={false} isMyAccountEnabled={false}/>
      <Banner />
      <LandingForm />
    </div>
  );
}

export default App;
