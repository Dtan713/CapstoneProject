import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="border rounded w-full p-2"
              required
            />
          </div>
          <Link to="/home">
            <button
              type="button"
              className="bg-blue-500 text-white rounded w-full py-2 hover:bg-blue-600"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
