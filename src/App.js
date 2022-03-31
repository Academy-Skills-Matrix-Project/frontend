import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import Banner from './Components/Banner/Banner';
import LandingForm from './Components/LandingForm/LandingForm';


function App() {
  return (
    <div className="App">

      <Navbar />
      <Banner />
      <LandingForm />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Lejo's content</p>
        <p>
          Edit <code>src/App.js </code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          New Academy Architect
        </a>
      </header>

    </div>
  );
}

export default App;
