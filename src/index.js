import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './router/AppRouter';
import store from './store/store';
import './styles/normalize.css'


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

