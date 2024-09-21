import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-300">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Welcome Back!</h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Password</label>
            <input
              type="password"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <Link to="/home">
            <button
              type="button"
              className="bg-blue-600 text-white rounded-lg w-full py-3 font-semibold transition duration-300 hover:bg-blue-700 transform hover:scale-105"
            >
              Login
            </button>
          </Link>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don’t have an account? 
            <Link to="/signup" className="text-blue-600 font-semibold hover:underline"> Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
