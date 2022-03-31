import Banner from './Components/Banner/Banner';
import LandingForm from './Components/LandingForm/LandingForm';
import NavHeader from './Components/NavHeader/NavHeader';


function App() {
  return (
    <div className="App">
      <NavHeader isLogoutEnabled={false} isSearchEnabled={false} isMyAccountEnabled={false}/>
      <Banner />
      <LandingForm />


    
    </div>
  );
}

export default App;
