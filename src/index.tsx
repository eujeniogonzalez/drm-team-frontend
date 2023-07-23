import React from 'react';
import App from './components/app/app';
import HistoryRouter from './components/history-router/history-routr';
import { createBrowserHistory } from 'history';
import { createRoot } from 'react-dom/client';
import './main.scss';

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <React.StrictMode>
    <HistoryRouter history={createBrowserHistory()}>
      <App />
    </HistoryRouter>
  </React.StrictMode>
);

