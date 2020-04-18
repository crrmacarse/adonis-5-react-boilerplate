import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import App from 'app';
import store from './store';

export default () => (
  <ReduxProvider store={store}>
    <RouterProvider>
      <App />
    </RouterProvider>
  </ReduxProvider>
);
