import React from 'react';
import './About.css'; // Import the CSS file

function About() {
  return (
    <div className="about-container">
      <h2 style={{ color: 'orange', fontWeight: 'bold', fontSize: '2rem' }}>About This Website</h2>
      <p className="about-paragraph">
        This is a fun randomizer for couples and individuals
      </p>
    </div>
  );
}

export default About;
