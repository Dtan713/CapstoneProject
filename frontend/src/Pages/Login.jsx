import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900"> {/* Dark background */}
      <div className="bg-gray-800 p-10 shadow-lg max-w-lg w-full border border-gray-700"> {/* Removed rounded-lg */}
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">Welcome Back!</h2>
        <form>
          <div className="mb-6">
            <label className="block text-yellow-300 mb-2 font-medium text-left">Email</label> {/* Left-aligned label */}
            <input
              type="email"
              className="border border-gray-600 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" // Changed rounded-lg to rounded-md for a less rounded edge
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-yellow-300 mb-2 font-medium text-left">Password</label> {/* Left-aligned label */}
            <input
              type="password"
              className="border border-gray-600 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" // Changed rounded-lg to rounded-md for a less rounded edge
              required
            />
          </div>
          <Link to="/home">
            <button
              type="button"
              className="bg-blue-600 text-white rounded-md w-full py-3 font-semibold transition duration-300 hover:bg-blue-700 transform hover:scale-105" // Changed rounded-lg to rounded-md for consistency
            >
              Login
            </button>
          </Link>
        </form>
        <div className="mt-4 text-center">
          <p className="text-yellow-300">
            Don’t have an account? 
            <Link to="/signup" className="text-blue-400 font-semibold hover:underline"> Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
