// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">Heads Or Tails</h1>
      <div className="mt-4">
        <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
        <br />
        <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
      </div>
    </div>
  );
}

export default Home;
