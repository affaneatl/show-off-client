import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'animate.css';
import NavBar from './views/NavBar';
import AppFooter from './views/AppFooter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './pages/About';
AOS.init()
function App() {
  return (
    <div className="App custombg1">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
