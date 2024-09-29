import React from 'react';
import { useLocation } from 'react-router-dom';
import './About.css'; 

function About() {
  const location = useLocation();

  const backgroundStyle = {
    backgroundImage: location.pathname === '/about' 
      ? "url('')" // Add your background image URL here
      : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '165vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black', 
    textShadow: 'none',
    padding: '20px',
    textAlign: 'center',
  };

  const containerStyle = {
    border: '5px solid yellow', // Yellow border
    borderRadius: '10px', // Rounded corners for better aesthetics
    padding: '40px', // Additional padding inside the container
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: light background for readability
  };

  return (
    <div style={backgroundStyle}>
      <div style={containerStyle}>
        <h2 className="font-bold text-7xl mb-4">
        📒About Our Planner
        </h2>
        <p className="font-medium text-4xl mb-4 px-4">
          Welcome to <span className="text-primary">Heads or Tails</span>, your ultimate planning companion designed to elevate your dining experiences and adventures! Whether you're looking for the perfect restaurant to satisfy your cravings or seeking a fun way to make decisions, we've got you covered.
        </p>
        <h3 className="font-bold text-7xl mb-4">
          🧐Heads or Tails Decision-Making
        </h3>
        <p className="font-medium text-4xl mb-4 px-4">
          Can’t decide where to go? Let fate take the wheel! Our unique heads or tails feature adds an element of fun to your planning. Simply flip a coin and let chance guide your culinary adventure. It’s the perfect solution for indecisive moments!
        </p>
        <h3 className="font-bold text-7xl mb-4">
          🌟 Join the Community!
        </h3>
        <p className="font-medium text-4xl mb-4 px-4">
          Join a growing community of food lovers! Share your experiences, keep track of restaurants you visited.
        </p>
        <p className="font-bold text-7xl">
         🍽️ Start planning with Heads or Tails today!
        </p>
      </div>
    </div>
  );
}

export default About;
