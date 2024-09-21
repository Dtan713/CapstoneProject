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
    minHeight: '50vh', // Increased height for more impact
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Text shadow for visibility
  };

  return (
    <div className="about-container" style={backgroundStyle}>
      <h2 style={{ color: 'yellow', fontWeight: 'bold', fontSize: '4rem', marginBottom: '20px', textAlign: 'center' }}>
        About This Website
      </h2>
      <h3 style={{ color: 'yellow', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '15px', textAlign: 'center' }}>
        A Fun Randomizer for Everyone
      </h3>
      <h4 style={{ color: 'yellow', fontWeight: 'bold', fontSize: '2.0rem', textAlign: 'center', maxWidth: '600px' }}>
        Explore various randomization options to help make decisions in a fun and engaging way!
      </h4>
      <p style={{ color: 'Yellow', fontSize: '2.0em', textAlign: 'center', marginTop: '20px', padding: '0 20px' }}>
        Whether you're a couple looking for new date ideas or an individual seeking a bit of randomness in your life,
        this website provides a unique and enjoyable experience.
      </p>
    </div>
  );
}

export default About;

