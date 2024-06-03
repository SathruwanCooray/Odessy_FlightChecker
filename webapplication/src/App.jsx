import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FlightCheck from './pages/FlightCheck';
import Home from './pages/Home'; // You need to create these components
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <>
      <div className="background-circle-1"></div>
      <div className="background-circle-2"></div>
      <div className="min-h-screen relative z-10"> {/* z-10 ensures content is above the circle */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/home' element={<Home />} />
          <Route path='/flightcheck' element={<FlightCheck />} />

        </Routes>
      </div>
    </>
  );
}

export default App;