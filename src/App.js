import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Location from './pages/Location';
import About from './pages/About';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/location" element={<Location />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App; 