import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Ensure this imports your CSS file with the font

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    // Check if the user is logged in by looking for an item in localStorage
    const userToken = localStorage.getItem("auth");
    if (userToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://thumbs.dreamstime.com/b/heads-tails-text-orange-grungy-round-rubber-stamp-vintage-227040330.jpg"
              alt="Logo"
              className="h-12 w-12 mr-3 border-4 border-yellow-500" // Changed to border-4 for a bolder border
            />
            <div
              className="text-4xl font-Courier-Bold tracking-wide ml-[-10px]"
              style={{ fontFamily: "Gotham, sans-serif" }}
            >
              Heads Or Tails
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-6 items-center">
              <Link
                to="/home"
                className="text-yellow-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-semibold"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-yellow-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-semibold"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-yellow-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-semibold"
              >
                Contact
              </Link>
              {isLoggedIn ? (
                <>
                  <Link
                    to="/plans"
                    className="text-yellow-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-semibold"
                  >
                    Plans
                  </Link>
                  <Link
                    to="/restaurants"
                    className="text-yellow-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-semibold"
                  >
                    Restaurants
                  </Link>
                  <button className="text-yellow-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-semibold">
                    I Can't Choose
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-yellow-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-semibold"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-yellow-300 hover:bg-blue-700 hover:text-white px-4 py-3 rounded-md text-lg font-semibold"
                  >
                    Login
                  </Link>
                </>
              )}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/home"
            className="text-yellow-300 hover:bg-blue-700 hover:text-white block px-4 py-3 rounded-md text-lg font-semibold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-yellow-300 hover:bg-blue-700 hover:text-white block px-4 py-3 rounded-md text-lg font-semibold"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-yellow-300 hover:bg-blue-700 hover:text-white block px-4 py-3 rounded-md text-lg font-semibold"
          >
            Contact
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-blue-600 text-white block px-4 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-800"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white block px-4 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-800"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
