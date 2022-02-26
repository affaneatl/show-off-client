import Home from './pages/Home';
import WorkCategories from './views/WorkCategories';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/work-categories' element={<WorkCategories/>}/>
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
