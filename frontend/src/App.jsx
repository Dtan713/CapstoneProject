import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import NavBar from './Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Wheel from './Pages/Wheel';

const backgrounds = {
  '/home': 'url("https://example.com/home-background.jpg")',
  '/about': 'url("https://images.wondershare.com/virtulook/articles/random-background-generator-13.jpg")',
  '/contact': 'url("https://example.com/contact-background.jpg")',
  '/login': 'url("https://example.com/login-background.jpg")',
  '/game': 'url("https://example.com/game-background.jpg")',
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
        <h1 className="text-6xl font-extrabold font-serif neon-text">HEADS OR TAILS</h1>
        <nav>
          <Link to="/home" className="text-yellow-400 hover:text-yellow-300 mx-4">Home</Link>
          <Link to="/about" className="text-yellow-400 hover:text-yellow-300 mx-4">About</Link>
          <Link to="/contact" className="text-yellow-400 hover:text-yellow-300 mx-4">Contact</Link>
          <Link to="/login" className="text-yellow-400 hover:text-yellow-300 mx-4">Log In</Link>
          <Link to="/game" className="text-yellow-400 hover:text-yellow-300 mx-4">Wheel Game</Link>
        </nav>
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
        </Routes>
      </main>
      <footer className="text-white text-center p-4">
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

