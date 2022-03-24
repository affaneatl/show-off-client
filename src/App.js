import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'animate.css';

function App() {
  return (
    <div className="App custombg">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
