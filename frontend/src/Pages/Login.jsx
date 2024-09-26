import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css'; // Import the same CSS file for consistent styling

function Login() {
  const navigate = useNavigate();
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [createEmail, setCreateEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleForm = () => {
    setIsCreatingAccount(!isCreatingAccount);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", loginEmail, loginPassword);
    navigate('/home');
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (createEmail && createPassword && createPassword === confirmPassword) {
      console.log("Creating account with:", createEmail, createPassword);
      alert("Account created successfully!");
      navigate('/home');
    } else {
      alert("Please ensure all fields are filled correctly and that passwords match.");
    }
  };

  return (
    <div
      className="contact-container"
      style={{
        backgroundColor: '#2c3e50',
        padding: '60px',
        borderRadius: '10px',
        color: 'white',
        maxWidth: '600px', // Adjust this value for both pages
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlg9-2ci1Ts2HHas6wrAyO22of-Xfcvw7sYg&s"
        alt="Login Account"
        style={{
          width: '100%',
          maxWidth: '600px',
          borderRadius: '10px',
          marginBottom: '20px',
          border: '4px solid yellow',
        }}
      />

      <h2 style={{ color: 'Yellow', fontWeight: 'bold', fontSize: '3rem' }}>
        {isCreatingAccount ? 'Create Account' : 'Login'}
      </h2>

      {isCreatingAccount ? (
        <form className="contact-form" onSubmit={handleCreateSubmit} style={{ width: '100%' }}>
          <div className="form-group">
            <label htmlFor="newEmail" style={{ color: 'Yellow', fontWeight: 'bold', fontSize: '1.2rem' }}>
              Email:
            </label>
            <input
              type="email"
              id="newEmail"
              value={createEmail}
              onChange={(e) => setCreateEmail(e.target.value)}
              required
              style={{
                padding: '15px',
                marginTop: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                width: '100%',
                fontSize: '1rem',
                color: 'black',
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword" style={{ color: 'Yellow', fontWeight: 'bold', fontSize: '1.2rem' }}>
              Password:
            </label>
            <input
              type="password"
              id="newPassword"
              value={createPassword}
              onChange={(e) => setCreatePassword(e.target.value)}
              required
              style={{
                padding: '15px',
                marginTop: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                width: '100%',
                fontSize: '1rem',
                color: 'black',
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" style={{ color: 'Yellow', fontWeight: 'bold', fontSize: '1.2rem' }}>
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{
                padding: '15px',
                marginTop: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                width: '100%',
                fontSize: '1rem',
                color: 'black',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              marginTop: '20px',
              backgroundColor: 'orange',
              color: 'white',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1.2rem',
            }}
          >
            Create Account
          </button>
        </form>
      ) : (
        <form className="contact-form" onSubmit={handleLoginSubmit} style={{ width: '100%' }}>
          <div className="form-group">
            <label htmlFor="email" style={{ color: 'Yellow', fontWeight: 'bold', fontSize: '1.2rem' }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
              style={{
                padding: '15px',
                marginTop: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                width: '100%',
                fontSize: '1rem',
                color: 'black',
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ color: 'Yellow', fontWeight: 'bold', fontSize: '1.2rem' }}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
              style={{
                padding: '15px',
                marginTop: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                width: '100%',
                fontSize: '1rem',
                color: 'black',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              marginTop: '20px',
              backgroundColor: 'orange',
              color: 'white',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1.2rem',
            }}
          >
            Login
          </button>
        </form>
      )}

      <div className="mt-4 text-center">
        <p className="text-yellow-300" style={{ fontSize: '1.1rem' }}>
          {isCreatingAccount ? (
            <>
              Already have an account? 
              <button onClick={toggleForm} className="text-blue-400 font-semibold hover:underline" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Log In
              </button>
            </>
          ) : (
            <>
              Don’t have an account? 
              <button onClick={toggleForm} className="text-blue-400 font-semibold hover:underline" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Create Account
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Login;
