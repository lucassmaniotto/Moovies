import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyles';
import DefaultPage from './components/DefaultPage';

import Login from './pages/Login';

function AppRoutes() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route index element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
