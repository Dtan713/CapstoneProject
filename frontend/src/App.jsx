import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NavBar from './Navbar/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';

const backgrounds = {
  '/home': 'url("")',
  '/about': 'url("")',
  '/contact': 'url("")',
  '/login': 'url("")',
  // '/game': 'url("https://example.com/game-background.jpg")',
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  const location = useLocation();
  const currentBackground = backgrounds[location.pathname] || 'url("https://example.com/default-background.jpg")'; // Fallback
  
  return (
    <div 
      className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: currentBackground }}>
      <NavBar isSignedIn={isSignedIn} onSignIn={handleSignIn} onSignOut={handleSignOut} />
      <header className="text-white text-center p-8 bg-opacity-70">
        {/* <h1 className="text-6xl font-extrabold font-serif neon-text">HEADS OR TAILS</h1> */}
      </header>
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={
            isSignedIn ? (
              <>
                <div className="flex gap-6 mb-6">
                  <button onClick={() => handleClick('Heads')} className="bg-black-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 transition-colors">Heads</button>
                  <button onClick={() => handleClick('Tails')} className="bg-black-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 transition-colors">Tails</button>
                </div>
                <div>{result}</div>
              </>
            ) : (
              <div className="text-xl font-bold p-4 rounded-lg">Please log in to play!</div>
            )
          } />
          {/* Redirect from root path to login page */}
          <Route path="/" element={<Navigate to="/login" />} />
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
