import logo from './logo.svg';
import './App.css';
import NavHeader from './Components/NavHeader';
import Banner from './Components/Banner/Banner';
import LandingForm from './Components/LandingForm/LandingForm';

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Banner />
      <LandingForm />
    </div>
  );
}

export default App;
