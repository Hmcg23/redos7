import './App.css';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Design from './components/Design';
import About from './components/About';
import Code from './components/Code';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='design' element={<Design />} />
          <Route path='code' element={<Code />} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
  );
}

export default App;
