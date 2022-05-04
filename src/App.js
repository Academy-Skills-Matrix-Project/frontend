import React from 'react';
import './App.css';
import LandingForm from './Pages/LandingForm';
import UserInfo from './Pages/UserInfo';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SearchPage from './Pages/SearchPage';
import ProfileInfoPage from './Pages/ProfileInfoPage';
import { HashRouter } from 'react-router-dom';

let skillArray = [
  {userId: 1, skillId: 1, skillLevel: 1}, {userId: 1, skillId: 4, skillLevel: 2}, {userId: 1, skillId: 20, skillLevel: 3}, 
  {userId: 2, skillId: 4, skillLevel: 5}, {userId: 2, skillId: 26, skillLevel: 3},
  {userId: 3, skillId: 18, skillLevel: 3}, {userId: 3, skillId: 21, skillLevel: 2}, {userId: 3, skillId: 4, skillLevel: 4}, {userId: 3, skillId: 16, skillLevel: 5},
  {userId: 4, skillId: 7, skillLevel: 5}, {userId: 4, skillId: 33, skillLevel: 4},
  {userId: 5, skillId: 1, skillLevel: 4}, {userId: 5, skillId: 100, skillLevel: 5}, {userId: 5, skillId: 18, skillLevel: 3},
  {userId: 6, skillId: 42, skillLevel: 3}, {userId: 6, skillId: 268, skillLevel: 3}, {userId: 6, skillId: 77, skillLevel: 4},
  {userId: 7, skillId: 43, skillLevel: 5}, {userId: 7, skillId: 88, skillLevel: 5}, {userId: 7, skillId: 21, skillLevel: 4},
  {userId: 8, skillId: 1, skillLevel: 1}, {userId: 8, skillId: 32, skillLevel: 4}, {userId: 8, skillId: 33, skillLevel: 5},
  {userId: 9, skillId: 45, skillLevel: 3}, {userId: 9, skillId: 34, skillLevel: 1}, {userId: 9, skillId: 25, skillLevel: 2},
  {userId: 10, skillId: 46, skillLevel: 2}, {userId: 10, skillId: 84, skillLevel: 4}, {userId: 10, skillId: 74, skillLevel: 5},
  {userId: 11, skillId: 47, skillLevel: 5}, {userId: 11, skillId: 152, skillLevel: 2}, {userId: 11, skillId: 142, skillLevel: 4},
  {userId: 12, skillId: 48, skillLevel: 1}, {userId: 12, skillId: 56, skillLevel: 3}, {userId: 12, skillId: 92, skillLevel: 3},
  {userId: 13, skillId: 49, skillLevel: 4}, {userId: 13, skillId: 1, skillLevel: 4}, {userId: 13, skillId: 205, skillLevel: 4},
  {userId: 14, skillId: 40, skillLevel: 4}, {userId: 14, skillId: 207, skillLevel: 2}, {userId: 14, skillId: 202, skillLevel: 4},
  {userId: 15, skillId: 14, skillLevel: 5}, {userId: 15, skillId: 81, skillLevel: 3}, {userId: 15, skillId: 87, skillLevel: 4},
  {userId: 16, skillId: 24, skillLevel: 2}, {userId: 16, skillId: 407, skillLevel: 4}, {userId: 16, skillId: 423, skillLevel: 5},
  {userId: 17, skillId: 34, skillLevel: 3}, {userId: 17, skillId: 390, skillLevel: 2}, {userId: 17, skillId: 444, skillLevel: 4},
  {userId: 18, skillId: 44, skillLevel: 4}, {userId: 18, skillId: 283, skillLevel: 2}, {userId: 18, skillId: 391, skillLevel: 3},
  {userId: 19, skillId: 54, skillLevel: 5}, {userId: 19, skillId: 111, skillLevel: 1}, {userId: 19, skillId: 201, skillLevel: 3},
  {userId: 20, skillId: 64, skillLevel: 1}, {userId: 20, skillId: 65, skillLevel: 2}, {userId: 20, skillId: 56, skillLevel: 4},
  {userId: 21, skillId: 74, skillLevel: 4}, {userId: 21, skillId: 71, skillLevel: 45}, {userId: 21, skillId: 205, skillLevel: 4},
]

let languageArray = [
  {userId: 1, languageId: 1, skillLevel: 3}, {userId: 1, languageId: 7, skillLevel: 4}, {userId: 1, languageId: 3, skillLevel: 3},
  {userId: 2, languageId: 5, skillLevel: 4}, {userId: 2, languageId: 11, skillLevel: 1}, {userId: 2, languageId: 12, skillLevel: 2}, {userId: 2, languageId: 13, skillLevel: 3},
  {userId: 3, languageId: 2, skillLevel: 2}, {userId: 3, languageId: 12, skillLevel: 4},
  {userId: 4, languageId: 4, skillLevel: 4}, {userId: 4, languageId: 7, skillLevel: 3}, {userId: 4, languageId: 17, skillLevel: 3},
  {userId: 5, languageId: 3, skillLevel: 1},
  {userId: 6, languageId: 8, skillLevel: 2},
  {userId: 7, languageId: 10, skillLevel: 4},
  {userId: 8, languageId: 11, skillLevel: 2},
  {userId: 9, languageId: 12, skillLevel: 3},
  {userId: 10, languageId: 13, skillLevel: 4},
  {userId: 11, languageId: 14, skillLevel: 4},
  {userId: 12, languageId: 15, skillLevel: 2},
  {userId: 13, languageId: 16, skillLevel: 3},
  {userId: 14, languageId: 17, skillLevel: 4},
  {userId: 15, languageId: 18, skillLevel: 5},
  {userId: 16, languageId: 9, skillLevel: 2},
  {userId: 17, languageId: 19, skillLevel: 3},
  {userId: 18, languageId: 17, skillLevel: 3},
  {userId: 19, languageId: 1, skillLevel: 2},
  {userId: 20, languageId: 9, skillLevel: 4},
  {userId: 21, languageId: 7, skillLevel: 1},
]
localStorage.setItem('skills', JSON.stringify(skillArray));
localStorage.setItem('languages', JSON.stringify(languageArray));

function App() {
  return (
    <div className='App'>
    <HashRouter hashType='hashbang'>
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
    <Router></Router>
    </div>
   
    
    
  );
}

export default App;
