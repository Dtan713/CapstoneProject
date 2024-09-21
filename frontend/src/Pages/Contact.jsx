import React from 'react';
import './Contact.css'; // Import the CSS file if you have styles

function Contact() {
  return (
    <div className="contact-container">
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


