import './main.scss';
import React from 'react';
import App from './components/app/app';
import HistoryRouter from './components/history-router/history-routr';
import { createRoot } from 'react-dom/client';
import browserHistory from './services/browser-history';

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <App />
    </HistoryRouter>
  </React.StrictMode>
);

