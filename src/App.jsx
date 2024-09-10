import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';


 // Assuming the Navbar will appear on all pages
import Destination from './Component/Destination';
import Crew from './Component/Crew';
import Technology from './Component/Technology';


function App() {
  return (
    <Router>
      <div className="App">
         {/* Navbar stays consistent across pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination/>} />
          <Route path="/crew" element={<Crew/>} />
          <Route path="/technology" element={<Technology/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
