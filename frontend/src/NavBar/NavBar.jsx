import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar({ isSignedIn, onSignIn, onSignOut }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://as1.ftcdn.net/v2/jpg/06/57/45/90/1000_F_657459006_yutl35amfkomxsQrttMKcEPbj89zeABX.jpg"
              alt="Logo"
              className="h-10 w-10 mr-3"  // Adjusted size here
            />
            <div className="text-5xl font-serif tracking-wide ml-[-10px]">
              Heads Or Tails
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-6 items-center">
              <Link to="/home" className="text-gray-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-medium">Home</Link>
              <Link to="/about" className="text-gray-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-medium">About</Link>
              <Link to="/contact" className="text-gray-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-medium">Contact</Link>
              <Link to="/login" className="text-gray-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-medium">Login</Link>
              <Link to="/wheel" className="text-gray-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-medium">Spin the Wheel</Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-10 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/about" className="text-gray-300 hover:bg-blue-700 hover:text-white block px-4 py-3 rounded-md text-lg font-medium">About</Link>
          <Link to="/contact" className="text-gray-300 hover:bg-blue-700 hover:text-white block px-4 py-3 rounded-md text-lg font-medium">Contact</Link>
          <Link to="/wheel" className="text-gray-300 hover:bg-blue-700 hover:text-white block px-4 py-3 rounded-md text-lg font-medium">Spin the Wheel</Link>
          {isSignedIn ? (
            <button
              onClick={onSignOut}
              className="bg-blue-600 text-white block px-4 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-800"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={onSignIn}
              className="bg-blue-600 text-white block px-4 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-blue-800"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

