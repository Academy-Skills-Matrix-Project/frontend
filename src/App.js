import React from 'react';
import LandingForm from './Pages/LandingForm';
import './App.css';
//import NavHeader from './Components/NavHeader/NavHeader';
import GeneralInfo from './Pages/GeneralInfo';
import SkillsPage from './Pages/SkillsPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import SearchPage from './Pages/SearchPage';



function App() {
  return (
    <div className='App'>
      <Router>
          
          {/* applies conditions to the props that will be passed to the navbar */}
          {/* <NavHeader isLogoutEnabled={false} isSearchEnabled={false} isMyAccountEnabled={false}/> */}
          <main>
          <Switch>
            <Route path='/generalinfo'>
              <GeneralInfo />
            </Route>
            <Route path='/skillspage'>
              <SkillsPage/>
            </Route>
            <Route path='/landingform'>
              <LandingForm/>
            </Route>
            {/* <Route path='/searchpage'>
              <SearchPage />
            </Route> */}
            <Route path='/'>
              <GeneralInfo/>
              {/* <SearchPage/> */}
            </Route>
            
          </Switch>
          </main>
          
        </Router>
    </div>
  );
}

export default App;
