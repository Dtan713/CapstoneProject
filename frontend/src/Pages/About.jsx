import React from 'react';
import { useLocation } from 'react-router-dom';
import './About.css'; // Ensure this file contains your custom styles

function About() {
  const location = useLocation();

  // Change background style based on the current route
  const backgroundStyle = {
    backgroundImage: location.pathname === '/about' 
      ? "url('')" // Replace with your image URL
      : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black', // Change text color to black
    textShadow: 'none', // Remove text shadow if you want a clean look
    padding: '20px',
  };

  return (
    <div style={backgroundStyle}>
      <h2 className="font-bold text-7xl mt-4 mb-4">
        About This Website
      </h2>
      <h3 className="font-semibold text-6xl mt-4 mb-4">
        A Fun Randomizer for Everyone
      </h3>
      <h4 className="font-medium text-3xl mt-4 mb-4">
        Explore various randomization options to help make decisions in a fun and engaging way!
      </h4>
      <p className="font-medium text-3xl mt-4 px-4">
        Whether you're a couple looking for new date ideas or an individual seeking a bit of randomness in your life,
        this website provides a unique and enjoyable experience.
      </p>
    </div>
  );
}

export default About;
