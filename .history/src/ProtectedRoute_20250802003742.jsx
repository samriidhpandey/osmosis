import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem('adminAuth');
  return isAuth ? children : <Navigate to="/admin" />;
};
const handleLogout = () => {
  localStorage.removeItem('adminAuth');
  navigate('/admin');
};


export default ProtectedRoute;
