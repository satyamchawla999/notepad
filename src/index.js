import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Components/Main';
import { ToastProvider } from 'react-toast-notifications';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Main />
      </Provider>
  </React.StrictMode>
);
