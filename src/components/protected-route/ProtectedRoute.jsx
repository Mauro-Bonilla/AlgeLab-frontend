// src/components/protected-route/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';
import Spinner from '../../views/spinner/Spinner';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/anh-algelab/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
