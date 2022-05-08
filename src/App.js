import './App.css';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
  );
}

export default App;
