import React from 'react';
import './App.css';
import LandingForm from './Pages/LandingForm';
import UserInfo from './Pages/UserInfo';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SearchPage from './Pages/SearchPage';
import ProfileInfoPage from './Pages/ProfileInfoPage';
import { HashRouter } from 'react-router-dom';



function App() {
  return (
    <div className='App'>
    <HashRouter>
      <main>
      <Switch>
        <Route  path='/landingform'>
          <LandingForm/>
        </Route>
        <Route  path='/userinfo/:id/:selectedId'>
          <UserInfo />
        </Route>        
        <Route  path='/profilepage/:id/:selectedId'>
          <ProfileInfoPage />
        </Route>
        {/* <Route path='/profilepage'>
          <ProfileInfoPage/>
        </Route> */}
        <Route  path='/searchpage/:id'>
          <SearchPage />
        </Route>
        <Route  path='/'>
          <LandingForm/>
        </Route>
      </Switch>
      </main>
    </HashRouter>
    </div>
  );
}

export default App;
