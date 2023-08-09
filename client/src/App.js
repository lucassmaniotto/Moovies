import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './components/GlobalStyles';
import AppRoutes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}

export default App;
