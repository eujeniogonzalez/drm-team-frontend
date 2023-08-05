import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state-types';
import { AxiosInstance } from 'axios';
import { State } from '../types/state-types';
import { APIRoutes } from '../const/router-const';
import { Token } from '../types/token-type';
import { AuthData } from '../types/auth-data-type';
import { UserData } from '../types/user-data-type';

export const refreshAuthAction = createAsyncThunk<Token, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>
(
  'refreshAuthAction',
  async (_arg, { extra: api }) => { // todo Попробовать убрать диспатч
    const { data } = await api.get(APIRoutes.Refresh);

    return data.access_token; // todo Заменить на кэмел кейс
  }
);

export const loginAction = createAsyncThunk<Token, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>
(
  'loginAction',
  async ({ login: email, password }, { dispatch, extra: api }) => { // todo Попробовать убрать диспатч
    const { data: { payload } } = await api.post<UserData>(APIRoutes.Login, { email, password });

    return payload.access_token; // todo Заменить на кэмел кейс
  }
);


