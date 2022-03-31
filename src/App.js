import logo from './logo.svg';
import './App.css';
import NavHeader from './Components/NavHeader/NavHeader';
import Banner from './Components/Banner/Banner';
import LandingForm from './Components/LandingForm/LandingForm';
import ProfileInfoPage from './Pages/ProfileInfoPage';
import SearchPage from './Pages/SearchPage';
import LanguagesPage from './Pages/LanguagesPage';
import SkillsPage from './Pages/SkillsPage';

function App() {
  return (
    <div className="App">
      <NavHeader isLogoutEnabled={true} isSearchEnabled={true} isMyAccountEnabled={true}/>
      <Banner />
      <LandingForm />
      {/* <ProfileInfoPage /> */}
      {/* <SearchPage /> */}
      {/* <LanguagesPage /> */}
      {/* <SkillsPage /> */}

    
    </div>
  );
}

export default App;
