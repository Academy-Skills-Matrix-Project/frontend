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
    </div>
  );
}

export default App;
