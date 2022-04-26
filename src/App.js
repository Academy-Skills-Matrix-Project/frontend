import React from 'react';
import './App.css';
import LandingForm from './Pages/LandingForm';
import UserInfo from './Pages/UserInfo';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
        <Route path='/userinfo'>
          <UserInfo />
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
