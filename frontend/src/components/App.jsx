// src/components/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar'; // Import the NavBar component
import './App.css'; // Import CSS file for animations

function App() {
  const [result, setResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleClick = (choice) => {
    setIsSpinning(true);
    const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
    setTimeout(() => {
      setResult(outcome === choice ? 'You Win!' : 'You Lose!');
      setIsSpinning(false);
    }, 1000);
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/02/83/54/94/240_F_283549444_QJP74KROpbcvsBvohYSSJxVfFIcqr5O8.jpg")' }}>
        <NavBar /> {/* Include the NavBar component */}
        <header className="text-white text-center p-8 bg-opacity-70">
          <h1 className="text-6xl font-extrabold neon-text">HEADS OR TAILS</h1>
          <div className="mt-8 flex justify-center">
            {!isSignedIn ? (
              <button
                onClick={handleSignIn}
                className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition-colors flex items-center gap-3"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6A5yy0ftMeBgTmsVSXKQmm_NbAFV-6H7SWg&s"
                  alt="Sign In"
                  className="w-14 h-14"
                />
                Sign In
              </button>
            ) : (
              <button
                onClick={handleSignOut}
                className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-colors"
              >
                Sign Out
              </button>
            )}
          </div>
        </header>
        <main className="flex flex-col items-center justify-center flex-grow p-6">
          {isSignedIn ? (
            <>
              <img
                src="https://spinthewheel.app/assets/images/preview/dinner-to-eat.png"
                alt="Random Image"
                className={`w-full max-w-2xl border-4 border-green-600 rounded-lg mb-6 transition-transform duration-500 ${isSpinning ? 'spin' : ''}`}
                onClick={() => handleClick(result === 'Heads' ? 'Heads' : 'Tails')}
              />
              <div className="flex gap-6 mb-6">
                <button
                  onClick={() => handleClick('Heads')}
                  className="bg-black-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
                >
                  Heads
                </button>
                <button
                  onClick={() => handleClick('Tails')}
                  className="bg-black-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
                >
                  Tails
                </button>
              </div>
              <div className="text-2xl font-bold bg-yellow-200 p-4 rounded-lg">
                {result}
              </div>
            </>
          ) : (
            <div className="text-xl font-bold p-4 rounded-lg">
             
            </div>
          )}
        </main>
        <footer className="bg-blue-600 text-white text-center p-4">
          <p>&copy; 2024 Heads or Tails</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
