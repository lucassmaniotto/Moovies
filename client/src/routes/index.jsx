import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import DefaultPage from '../components/DefaultPage';

import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Login />} />
          <Route path="private" element={<PrivateRoute />}>
            <Route
              path="logged"
              element={<h1 style={{ marginTop: '100px' }}>Logged</h1>}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
