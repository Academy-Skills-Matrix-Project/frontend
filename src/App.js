import React from 'react';
import LandingForm from './Pages/LandingForm';
import './App.css';
import GeneralInfo from './Pages/GeneralInfo';
import SkillsPage from './Pages/SkillsPage';
import LanguagesPage from './Pages/LanguagesPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SearchPage from './Pages/SearchPage';
import ProfileInfoPage from './Pages/ProfileInfoPage';


function App() {
  return (
    <div className='App'>
   <Router>
      <main>
      <Switch>
        <Route path='/landingform'>
          <LandingForm/>
        </Route>
        <Route path='/generalinfo'>
          <GeneralInfo />
        </Route>
        <Route path='/skillspage'>
          <SkillsPage/>
        </Route>
        <Route path='/languagepage'>
          <LanguagesPage/>
        </Route>
        <Route path='/profilepage'>
          <ProfileInfoPage />
        </Route>
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
