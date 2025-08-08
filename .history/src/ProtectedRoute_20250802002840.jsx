// src/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';

  return isAuthenticated ? children : <Navigate to="/admin" />;
};

export default ProtectedRoute;
