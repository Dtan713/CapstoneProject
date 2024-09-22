import React from 'react';

function Confirmation() {
  return (
    <div style={{
      backgroundColor: '#2c3e50', // Background color
      color: 'white', // Text color
      padding: '40px',
      borderRadius: '10px',
      textAlign: 'center',
    }}>
      <h2 style={{ color: 'Yellow', fontWeight: 'bold', fontSize: '2.5rem' }}>Message Confirmed</h2>
      <p>Your message has been sent successfully!</p>
    </div>
  );
}

export default Confirmation;
