import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem('adminAuth');
  return children ? children : <Navigate to="/admin" />;
};

export default ProtectedRoute;
