import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NavBar from './Navbar/Navbar'; 
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';

const backgrounds = {
  '/home': { image: 'url("your-home-background-url")' },
  '/about': { image: 'url("your-about-background-url")' },
  '/contact': { image: 'url("your-contact-background-url")' },
  '/login': { image: 'url("your-login-background-url")' },
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const location = useLocation();
  const { image, color } = backgrounds[location.pathname] || { image: 'url("fallback-image-url")', color: 'rgba(0, 0, 0, 0.5)' };

  return (
    <div 
      className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: image }}>

      {/* Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: color }} 
      />
      
      <NavBar isSignedIn={isSignedIn} onSignIn={() => setIsSignedIn(true)} onSignOut={() => setIsSignedIn(false)} />
      <header className="text-black text-center p-8 bg-opacity-70">
        {/* Optional header content */}
      </header>
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          {/* Redirect from root path to home page */}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </main>
      <footer className="text-black text-center p-4">
        <p>&copy; 2024 Heads or Tails</p>
      </footer>
    </div>
  );
}

export default function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
