import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import DefaultPage from '../components/DefaultPage';

import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Logged from '../pages/Logged';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Home />} />
          <Route path="private" element={<PrivateRoute />}>
            <Route path="logged" element={<Logged />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
