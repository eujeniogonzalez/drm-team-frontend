import './main.scss';
import React from 'react';
import App from './components/app/app';
import HistoryRouter from './components/history-router/history-routr';
import { createRoot } from 'react-dom/client';
import browserHistory from './services/browser-history';
import { store } from './store';
import { refreshAuthAction } from './store/api-actions';
import { Provider } from 'react-redux';

// store.dispatch(refreshAuthAction());

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);

