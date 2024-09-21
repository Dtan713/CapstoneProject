import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';


function App() {
   const [isSignedIn, setIsSignedIn] = useState(false);

  // const handleClick = (choice) => {
  //   setIsSpinning(true);
  //   const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
  //   setTimeout(() => {
  //     setResult(outcome === choice ? 'You Win!' : 'You Lose!');
  //     setIsSpinning(false);
  //   }, 1000);
  // };

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
        <NavBar isSignedIn={isSignedIn} onSignIn={handleSignIn} onSignOut={handleSignOut} />
        <header className="text-white text-center p-8 bg-opacity-70">
          {/* <h1 className="text-6xl font-extrabold font-serif neon-text">HEADS OR TAILS</h1> */}
        </header>
        <main className="flex flex-col items-center justify-center flex-grow p-6">
          <Routes>
            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login onSignIn={handleSignIn} />} />
            <Route path="/game" element={
              isSignedIn ? (
                <>
                  {/* <img
                    src="https://spinthewheel.app/assets/images/preview/dinner-to-eat.png"
                    alt="Random Image"
                    className={`w-full max-w-2xl rounded-lg mb-6 transition-transform duration-500 ${isSpinning ? 'spin' : ''}`}
                    onClick={() => handleClick(result === 'Heads' ? 'Heads' : 'Tails')}
                  /> */}
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
    </Router>
  );
}

export default App; 

