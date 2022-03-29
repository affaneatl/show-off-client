import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'animate.css';
import NavBar from './views/NavBar';
import AppFooter from './views/AppFooter';
function App() {
  return (
    <div className="App custombg1">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
