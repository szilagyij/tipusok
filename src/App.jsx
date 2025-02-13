import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import TypeDetails from './components/TypeDetails';
import AddNewType from './components/AddNewType';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tipusok/:id" element={<TypeDetails />} />
          <Route path="/ujtipus" element={<AddNewType />} />
        </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;