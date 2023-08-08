import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state-types';
import { AxiosInstance } from 'axios';
import { State } from '../types/state-types';
import { APIRoutes } from '../const/router-const';
import { Token } from '../types/token-type';
import { LoginBody } from '../types/request-api-types';
import { ResponseAPI, LoginPayload, RegisterPayload } from '../types/response-api-types';
import { RegisterBody } from '../types/request-api-types';

export const registerUserAction = createAsyncThunk<ResponseAPI<RegisterPayload>, RegisterBody, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>
(
  'registerUserAction',
  async ({ email, password, repeatPassword }, { extra: api }) => {
    const { data } = await api.post<ResponseAPI<RegisterPayload>>(APIRoutes.Register, { email, password, repeatPassword });

    return data;
  }
);

export const refreshAuthAction = createAsyncThunk<Token, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>
(
  'refreshAuthAction',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoutes.Refresh);

    return data.access_token; // todo Заменить на кэмел кейс
  }
);

export const loginUserAction = createAsyncThunk<ResponseAPI<LoginPayload>, LoginBody, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>
(
  'loginAction',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<ResponseAPI<LoginPayload>>(APIRoutes.Login, { email, password });

    return data;
  }
);


