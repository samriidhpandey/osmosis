import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem('admin') === 'fals';
  return isAuth ? children : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
