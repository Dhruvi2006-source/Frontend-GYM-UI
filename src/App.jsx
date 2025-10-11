import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Componants/Home'
import About from './Componants/About';
import Reserve from './Componants/Reserve';
import Navbar from './Componants/Navbar';
import Footer from './Componants/Footer';


const App = () => {
  return (
    <div>
      <div className="sticky top-0 w-full border-1">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
      <div className="fooer">
        <Footer/>
      </div>
    </div>
  );
}

export default App