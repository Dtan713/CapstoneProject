import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NavBar from './Navbar/Navbar'; 
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';

const backgrounds = {
  '/home': { image: 'url("https://img.freepik.com/premium-photo/blue-background-with-spread-mediterranean-appetizers-including-olives-cheese-tomatoes_14117-958320.jpg")' },
  '/about': { image: 'url("https://img.freepik.com/free-photo/bowl-mozzarella-balls-with-tomato-sauce-garlic-pasta-turquoise-background_23-2147922791.jpg")' },
  '/contact': { image: 'url("https://img.freepik.com/premium-photo/food-background-with-sea-fish-blue_128650-1312.jpg")' },
  '/login': { image: 'url("https://img.freepik.com/premium-photo/breakfast-buffet-bliss_1254967-49247.jpg")' },
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const location = useLocation();
  const { image } = backgrounds[location.pathname] || { image: 'url("fallback-image-url")' };

  return (
    <div 
      className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: image,
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundPosition: 'center', // Centers the image
      }}
    >
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
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </main>
      <footer className="text-black text-center p-4">
        <p className="font-bold text-lg">&copy; 2024 Heads or Tails</p>
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
