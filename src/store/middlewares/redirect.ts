import { PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../services/browser-history';
import { Middleware } from 'redux';
import { rootReducer } from '../root-reducer';

type ReducerType = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, ReducerType> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };

