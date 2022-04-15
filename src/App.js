import React from 'react';
import LandingForm from './Components/LandingForm/LandingForm';
import './App.css';
import GeneralInfo from './Pages/GeneralInfo';
import SkillsPage from './Pages/SkillsPage';
import ProfileInfoPage from './Pages/ProfileInfoPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SearchPage from './Pages/SearchPage';



function App() {
  return (
    <div className='App'>
      <Router>
          <main>
          <Switch>
            <Route path='/generalinfo'>
              <GeneralInfo />
            </Route>
            <Route path='/skillspage'>
              <SkillsPage/>
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
