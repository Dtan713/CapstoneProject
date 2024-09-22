import React from 'react';
import './Contact.css'; // Import the CSS file if you have styles

function Contact() {
  return (
    <div
      className="contact-container"
      style={{
        backgroundColor: '#2c3e50', // Background color
        padding: '40px', // Increased padding for extra space
        borderRadius: '10px', // Rounded corners
        color: 'white', // Text color
        maxWidth: '1200px', // Set maximum width for extra large appearance
        margin: 'auto', // Center the container
        height: 'auto', // Adjust height based on content
      }}
    >
      <h2 style={{ color: 'Yellow', fontWeight: 'bold', fontSize: '2.5rem' }}>Contact Us</h2> {/* Increased font size */}
      <p className="about-paragraph">
        If you have any questions, feel free to reach out!
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="email" style={{ color: 'Yellow', fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            style={{
              padding: '15px', // Increased padding for input
              marginTop: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              width: '100%',
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" style={{ color: 'Yellow', fontWeight: 'bold' }}>
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            required
            style={{
              padding: '15px', // Increased padding for input
              marginTop: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              width: '100%',
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" style={{ color: 'Yellow', fontWeight: 'bold' }}>
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Enter your message here"
            required
            rows="6" // Increased rows for a bigger text area
            style={{
              padding: '15px', // Increased padding for textarea
              marginTop: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              width: '100%',
              resize: 'none', // Prevent resizing for a cleaner look
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: '15px',
            backgroundColor: 'orange',
            color: 'white',
            padding: '12px 24px', // Increased padding for button
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1.1rem', // Increased font size for button
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;




