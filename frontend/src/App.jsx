import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DuplicateProcess from './pages/DuplicateProcess';
import TransmissionProcess from './pages/TransmissionProcess';
import JointProcess from './pages/JointProcess';
import './styles/global.css';
import './styles/components.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/duplicate" element={<DuplicateProcess />} />
          <Route path="/transmission" element={<TransmissionProcess />} />
          <Route path="/joint" element={<JointProcess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;