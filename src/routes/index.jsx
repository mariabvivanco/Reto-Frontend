/* eslint-disable react/prop-types */
import React from 'react';

import {
  BrowserRouter, Routes, Navigate, Route, 
} from 'react-router-dom';

import routes from './routes';

const isAuthenticated = false;

const PrivateRoute = ({ children }) => {
  if (!isAuthenticated) return <Navigate to="/login" />;
  return children;
};  

const PublicRoute = ({ children }) => {
  return children;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.private.map(({ path, name, Component }) => (
          <Route
            path={path}
            key={name}
            element={(
              <PrivateRoute key={name}>
                <Component />
              </PrivateRoute>
            )}
          />
        ))}

        {routes.public.map(({ path, name, Component }) => (
          <Route
            path={path}
            key={name}
            element={(
              <PublicRoute key={name}>
                <Component />
              </PublicRoute>
            )}
          />
        ))}
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
