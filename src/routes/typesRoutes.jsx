/* eslint-disable react/prop-types */

// Tratamiento para los tipos de tutas como todo es pública 
// la autenticación se asume siempre como falsa
import React from 'react';

import { Navigate } from 'react-router-dom';

const isAuthenticated = false;

export const PrivateRoute = ({ children }) => {
  if (!isAuthenticated) return <Navigate to="/login" />;
  return children;
};

export const PublicRoute = ({ children }) => {
  return children;
};
