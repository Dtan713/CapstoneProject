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
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    padding: '20px',
  };

  return (
    <div style={backgroundStyle}>
      <h2 className="text-royal-blue font-bold text-9xl mb-4"> {/* Increased size and changed color */}
        About This Website
      </h2>
      <h3 className="text-royal-blue font-semibold text-7xl mb-4"> {/* Increased size and changed color */}
        A Fun Randomizer for Everyone
      </h3>
      <h4 className="text-royal-blue font-medium text-4xl mb-4"> {/* Increased size and changed color */}
        Explore various randomization options to help make decisions in a fun and engaging way!
      </h4>
      <p className="text-royal-blue font-medium text-3xl mt-4 px-4"> {/* Increased size and changed color */}
        Whether you're a couple looking for new date ideas or an individual seeking a bit of randomness in your life,
        this website provides a unique and enjoyable experience.
      </p>
    </div>
  );
}

export default About;
