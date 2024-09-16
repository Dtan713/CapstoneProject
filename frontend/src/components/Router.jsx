// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import ProtectedRoute from './ProtectedRoute'; // Example for a protected route

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Example protected route */}
        <Route path="/protected" element={<ProtectedRoute />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
