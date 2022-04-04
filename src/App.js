import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'animate.css';
import NavBar from './views/NavBar';
import AppFooter from './views/AppFooter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './pages/About';
import Contact from './pages/Contact';
import HomeOne from './pages/HomeOne';
import AllProjects from './pages/AllProjects';
import DirectorsMessage from './views/DirectorsMessage';

AOS.init()
function App() {
  return (
    <div className="App custombg1">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/1' element={<HomeOne/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/directors-message' element={<DirectorsMessage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<AllProjects/>}/>
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
