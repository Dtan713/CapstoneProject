import React from 'react';
import { useLocation } from 'react-router-dom';
import './About.css'; // Ensure this file contains your custom styles

function About() {
  const location = useLocation();

  // Change background style based on the current route
  const backgroundStyle = {
    backgroundImage: location.pathname === '/about' 
      ? "url('https://example.com/your-background-image.jpg')" // Replace with your image URL
      : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '60vh', // Adjusted for more impact
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Text shadow for visibility
  };

  return (
    <div className="about-container" style={backgroundStyle}>
      <div className="max-w-3xl text-center bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h2 className="text-yellow-400 font-bold text-3xl mb-4">
          About This Website
        </h2>
        <h3 className="text-yellow-300 font-semibold text-2xl mb-4">
          A Fun Randomizer for Everyone
        </h3>
        <h4 className="text-yellow-200 font-medium text-xl mb-4">
          Explore various randomization options to help make decisions in a fun and engaging way!
        </h4>
        <p className="text-yellow-200 text-lg mt-4 px-4">
          Whether you're a couple looking for new date ideas or an individual seeking a bit of randomness in your life,
          this website provides a unique and enjoyable experience.
        </p>
      </div>
    </div>
  );
}

export default About;

