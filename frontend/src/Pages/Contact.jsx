import React from 'react';
import './Contact.css'; // Import the CSS file if you have styles

function Contact() {
  return (
    <div
      className="contact-container"
      style={{
        backgroundColor: '#2c3e50', // Example background color
        padding: '20px', // Add some padding
        borderRadius: '10px', // Optional: for rounded corners
        color: 'white' // Set text color for better contrast
      }}
    >
      <h2 style={{ color: 'Yellow', fontWeight: 'bold', fontSize: '2rem' }}>Contact Us</h2>
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
              padding: '10px',
              marginTop: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              width: '100%',
              maxWidth: '950px',
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
              padding: '10px',
              marginTop: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              width: '100%',
              maxWidth: '500px',
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
            rows="4"
            style={{
              padding: '10px',
              marginTop: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              width: '100%',
              maxWidth: '950px',
              resize: 'none', // Prevent resizing for a cleaner look
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: '10px',
            backgroundColor: 'orange',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;




