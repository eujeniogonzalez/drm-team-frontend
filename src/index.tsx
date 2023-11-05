import './main.scss';
import React from 'react';
import App from './components/app/app';
import HistoryRouter from './components/history-router/history-router';
import { createRoot } from 'react-dom/client';
import browserHistory from './services/browser-history';
import { store } from './store';
import { refreshAuthAction } from './store/api-actions/user-api-actions';
import { Provider } from 'react-redux';
import Toast from './components/toast/toast';
import Init from './components/init/init';

store.dispatch(refreshAuthAction());

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Init>
        <HistoryRouter history={browserHistory}>
          <App />
          <Toast />
        </HistoryRouter>
      </Init>
    </Provider>
  </React.StrictMode>
);

