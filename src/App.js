import React, {useState} from 'react';
import Banner from './Components/Banner/Banner';
import LandingForm from './Components/LandingForm/LandingForm';
import Rating from './Components/Rater/Rating.js'
import './App.css';
import NavHeader from './Components/NavHeader/NavHeader';




function App() {
  const [rating, setRating] = useState(0);
  return (
    <div className="App">
      {/* applies conditions to the props that will be passed to the navbar */}
      <NavHeader isLogoutEnabled={false} isSearchEnabled={false} isMyAccountEnabled={false}/>
      <Banner />
      <LandingForm /> 
      <Rating />
 
      
    </div>
  );
}

export default App;
