import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = checking

  useEffect(() => {
    const auth = localStorage.getItem('LoginAuth') === 'true';
    setIsAuthenticated(auth);
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show loader while checking
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
