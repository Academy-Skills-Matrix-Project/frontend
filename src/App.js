import './App.css';
import NavHeader from './Components/NavHeader/NavHeader';
import ProfileInfoPage from './Pages/ProfileInfoPage';
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <div className="App" >
      <NavHeader isLogoutEnabled={false} isSearchEnabled={false} isMyAccountEnabled={false}/>
      <ProfileInfoPage />
      <SearchPage />
    </div>
  );
}

export default App;
