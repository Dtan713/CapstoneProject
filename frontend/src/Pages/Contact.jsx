import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './Contact.css'; 

function Contact() {
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [isMessageSent, setIsMessageSent] = useState(false); 
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setIsMessageSent(true); 

    // Log data to console
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);

    // Send data to backend
    try {
      const response = await fetch('http://localhost:8080/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phone, message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Optionally handle the response if needed
      const data = await response.json();
      console.log('Response from server:', data);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    // Reset the form fields
    setEmail('');
    setPhone('');
    setMessage('');

    setTimeout(() => {
      navigate('/home'); 
    }, 2000); // Adjust the delay as needed
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) { 
      event.preventDefault(); 
      handleSubmit(event);
    }
  };

  return (
    <div className="contact-container" style={{
      backgroundColor: '#2c3e50',
      padding: '40px',
      borderRadius: '10px',
      color: 'white',
      maxWidth: '1200px',
      margin: 'auto',
      height: 'auto',
    }}>
      <h2 style={{ color: 'Yellow', fontWeight: 'bold', fontSize: '2.5rem' }}>Contact Us</h2>
      <p className="about-paragraph">
        If you have any questions, feel free to reach out!
      </p>
      {isMessageSent && (
        <div style={{
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: 'rgba(255, 255, 0, 0.5)',
          borderRadius: '5px',
          textAlign: 'center',
        }}>
          Your message has been sent successfully! 
        </div>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" style={{ color: 'Yellow', fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '15px',
              marginTop: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              width: '100%',
              color: 'black',
              background: 'white',
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" style={{ color: 'Yellow', fontWeight: 'bold' }}>Phone Number:</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              padding: '15px',
              marginTop: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              width: '100%',
              color: 'black',
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" style={{ color: 'Yellow', fontWeight: 'bold' }}>Message:</label>
          <textarea
            id="message"
            placeholder="Enter your message here"
            required
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              padding: '15px',
              marginTop: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              width: '100%',
              resize: 'none',
              color: 'black',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: '15px',
            backgroundColor: 'orange',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1.1rem',
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
