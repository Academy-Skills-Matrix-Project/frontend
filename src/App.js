import React from 'react';
import Banner from './Components/Banner/Banner';
import LandingForm from './Pages/LandingForm';
import './App.css';
import NavHeader from './Components/NavHeader/NavHeader';
import GeneralInfo from './Pages/GeneralInfo';
import SkillsPage from './Pages/SkillsPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <Router>
      
      {/* applies conditions to the props that will be passed to the navbar */}
      {/* <NavHeader isLogoutEnabled={false} isSearchEnabled={false} isMyAccountEnabled={false}/> */}
      <main>
      <Switch>
        <Route path='/generalinfo'>
          <GeneralInfo />
        </Route>
        <Route path='/searchpage'>
          <SearchPage />
        </Route>
        <Route path='/'>
          {/* <LandingForm/> */}
          <SearchPage/>
        </Route>
        
      </Switch>
      </main>
      
    </Router>
  );
}

export default App;
