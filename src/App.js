import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Pages/NavBar';
import Home from './Components/Pages/Home';
import Research from './Components/Pages/Research';
import Skills from './Components/Pages/Skills';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Resume from './Components/Pages/Resume'; // ✅ Add this




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Research' element={<Research />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Resume' element={<Resume />} /> {/* ✅ New */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
