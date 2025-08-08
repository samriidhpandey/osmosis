import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem('adminAuth') === 'true';  // ✅ Match this key
  return isAuth ? children : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;

