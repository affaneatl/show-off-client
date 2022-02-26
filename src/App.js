import ShowOff from './ShowOff';
import WorkCategories from './views/WorkCategories';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<ShowOff/>}/>
        <Route path='/work-categories' element={<WorkCategories/>}/>
      </Routes>
      {/* <ShowOff/> */}
    </div>
  );
}

export default App;
