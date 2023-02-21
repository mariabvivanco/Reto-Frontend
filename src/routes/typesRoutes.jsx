/* eslint-disable react/prop-types */
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
