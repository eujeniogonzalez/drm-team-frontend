import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state-types';
import { AxiosInstance } from 'axios';
import { State } from '../types/state-types';
import { APIRoutes } from '../const/api-const';
import { isClientDomainLocalhost } from '../utils';
import { getRefreshTokenFromStorage, isRefreshTokenSetInStorage } from '../services/local-storage';

import {
  ConfirmBody,
  LoginBody,
  RepassBody,
  RegisterBody,
  NewPasswordBody
} from '../types/request-api-types';

import {
  ResponseAPI,
  LoginPayload,
  RegisterPayload,
  ConfirmPayload,
  RepassPayload,
  NewPasswordPayload,
  LogoutPayload,
  RefreshPayload
} from '../types/response-api-types';

export const registerUserAction = createAsyncThunk<ResponseAPI<RegisterPayload>, RegisterBody, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>
(
  'registerUserAction',
  async ({ email, password, repeatPassword }, { extra: api }) => {
    const { data } = await api.post<ResponseAPI<RegisterPayload>>(APIRoutes.Register, { email, password, repeat_password: repeatPassword }); // todo Сделать паттерн адаптер

    return data;
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

export const confirmUserAction = createAsyncThunk<ResponseAPI<ConfirmPayload>, ConfirmBody, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>
(
  'confirmUserAction',
  async ({ confirmID }, { extra: api }) => {
    const { data } = await api.post<ResponseAPI<ConfirmPayload>>(APIRoutes.Confirm, { confirmID });

    return data;
  }
);

export const repassUserAction = createAsyncThunk<ResponseAPI<RepassPayload>, RepassBody, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>
(
  'repassUserAction',
  async ({ email }, { extra: api }) => {
    const { data } = await api.post<ResponseAPI<RepassPayload>>(APIRoutes.Repass, { email });

    return data;
  }
);

export const newPasswordUserAction = createAsyncThunk<ResponseAPI<NewPasswordPayload>, NewPasswordBody, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>
(
  'newPasswordUserAction',
  async ({ repassID, new_password, new_repeat_password }, { extra: api }) => {
    const { data } = await api.post<ResponseAPI<NewPasswordPayload>>(APIRoutes.NewPassword, { repassID, new_password, new_repeat_password });

    return data;
  }
);

export const logoutUserAction = createAsyncThunk<ResponseAPI<LogoutPayload>, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>
(
  'logoutUserAction',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<ResponseAPI<LogoutPayload>>(APIRoutes.Logout);

    return data;
  }
);

export const refreshAuthAction = createAsyncThunk<ResponseAPI<RefreshPayload>, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>
(
  'refreshAuthAction',
  async (_args, { extra: api }) => {
    let response;

    switch (true) {
      case isClientDomainLocalhost():
        const refresh_token = isRefreshTokenSetInStorage() ? getRefreshTokenFromStorage() : 'yrduyfiyf';

        response = await api.post<ResponseAPI<RefreshPayload>>(APIRoutes.Refresh, { refresh_token });
        break;
    
      default:
        response = await api.get<ResponseAPI<RefreshPayload>>(APIRoutes.Refresh);
        break;
    }

    return response.data;
  }
);


