import Banner from './Components/Banner/Banner';
import LandingForm from './Components/LandingForm/LandingForm';

import './App.css';

import NavHeader from './Components/NavHeader/NavHeader';
import GeneralInfo from './Components/GeneralInfo/GeneralInfo';



function App() {
  return (
    <div className='App'>
      {/* applies conditions to the props that will be passed to the navbar */}
      {/* <NavHeader isLogoutEnabled={false} isSearchEnabled={false} isMyAccountEnabled={false}/>
      <Banner />
      <LandingForm /> */}
      <GeneralInfo />
    </div>
  );
}

export default App;
