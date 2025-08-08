import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const children = localStorage.getItem('adminAuth');
  return children ? children : <Navigate to="/admin" />;
};

export default ProtectedRoute;
