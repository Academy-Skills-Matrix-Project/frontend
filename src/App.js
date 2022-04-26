import React from 'react';
import './App.css';
import LandingForm from './Pages/LandingForm';
import GeneralInfo from './Pages/GeneralInfo';
import SkillsPage from './Pages/SkillsPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SearchPage from './Pages/SearchPage';
import ProfileInfoPage from './Pages/ProfileInfoPage';
import LanguagesPage from './Pages/LanguagesPage';


function App() {
  return (
    <div className='App'>
    <Router>
      <main>
      <Switch>
        <Route path='/landingform'>
          <LandingForm/>
        </Route>
        {/* <Route path='/generalinfo'>
          <GeneralInfo />
        </Route> */}
        <Route path='/generalinfo/:id'>
          <GeneralInfo />
        </Route>
        <Route path='/skillspage'>
          <SkillsPage/>
        </Route>
        <Route path='/languagepage'>
          <LanguagesPage/>
        </Route>
        <Route path='/profilepage/:id'>
          <ProfileInfoPage/>
        </Route>
        {/* <Route path='/profilepage'>
          <ProfileInfoPage/>
        </Route> */}
        <Route path='/searchpage'>
          <SearchPage />
        </Route>
        <Route path='/'>
          <LandingForm/>
        </Route>
      </Switch>
      </main>
    </Router>
    </div>
  );
}

export default App;
