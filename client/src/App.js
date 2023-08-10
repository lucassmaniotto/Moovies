import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyle from './components/GlobalStyles';
import AppRoutes from './routes';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppRoutes />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Provider>
  );
}

export default App;
