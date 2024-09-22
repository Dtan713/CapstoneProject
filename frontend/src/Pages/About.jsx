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
    padding: '20px', // Optional: Add padding for better spacing
  };

  return (
    <div style={backgroundStyle}>
      <h2 className="text-yellow-400 font-bold text-4xl mb-4"> {/* Increased size */}
        About This Website
      </h2>
      <h3 className="text-yellow-300 font-semibold text-3xl mb-4"> {/* Increased size */}
        A Fun Randomizer for Everyone
      </h3>
      <h4 className="text-yellow-200 font-medium text-2xl mb-4"> {/* Increased size */}
        Explore various randomization options to help make decisions in a fun and engaging way!
      </h4>
      <p className="text-yellow-200 text-xl mt-4 px-4"> {/* Increased size */}
        Whether you're a couple looking for new date ideas or an individual seeking a bit of randomness in your life,
        this website provides a unique and enjoyable experience.
      </p>
    </div>
  );
}

export default About;
