import './App.css';
import NavHeader from './Components/NavHeader';
import ProfileInfoPage from './Pages/ProfileInfoPage';
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <div className="App">
      <NavHeader isLogoutEnabled={false} isMyAccountEnabled={false} isSearchEnabled={false} />
      <ProfileInfoPage />
      <SearchPage />
    </div>
  );
}

export default App;
