import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyles';
import DefaultPage from './components/DefaultPage';

import Login from './pages/Login';
import NotFound from './pages/NotFound';

function AppRoutes() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
