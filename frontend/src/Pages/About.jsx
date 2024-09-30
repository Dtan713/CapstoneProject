import React from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  const location = useLocation();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-black text-center ${location.pathname === '/about' ? 'bg-cover bg-center' : ''}`} style={{
      backgroundImage: location.pathname === '/about' ? "url('')" : 'none', // Add your background image URL here
      backgroundSize: 'cover',
      padding: '20px',
    }}>
      <div className="relative bg-white p-10 rounded-lg shadow-lg border-4 border-yellow-500 z-10 bg-opacity-80">
        <h2 className="font-bold text-7xl mb-4">
          📒 About Our Planner
        </h2>
        <p className="font-medium text-4xl mb-4 px-4">
          Welcome to Heads or Tails, your ultimate planning companion designed to elevate your dining experiences and adventures! Whether you're looking for the perfect restaurant to satisfy your cravings or seeking a fun way to make decisions, we've got you covered.
        </p>
        <h3 className="font-bold text-7xl mb-4">
          🧐 Heads or Tails Decision-Making
        </h3>
        <p className="font-medium text-4xl mb-4 px-4">
          Can’t decide where to go? Let fate take the wheel! Our unique heads or tails feature adds an element of fun to your planning. Simply flip a coin and let chance guide your culinary adventure. It’s the perfect solution for indecisive moments!
        </p>
        <h3 className="font-bold text-7xl mb-4">
          🌟 Join the Community!
        </h3>
        <p className="font-medium text-4xl mb-4 px-4">
          Join a growing community of food lovers! Share your experiences, keep track of restaurants you've visited.
        </p>
        <p className="font-bold text-7xl">
          🍽️ Start planning with Heads or Tails today!
        </p>
      </div>
  
    </div>
  );
}

export default About;
