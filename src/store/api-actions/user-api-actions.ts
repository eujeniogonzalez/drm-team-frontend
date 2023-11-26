import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatchType } from '../../types/state-types';
import { AxiosInstance } from 'axios';
import { StateType } from '../../types/state-types';
import { APIRoutes } from '../../const/api-const';
import { isClientDomainLocalhost } from '../../utils';
import { Symbols } from '../../const/common-const';

import {
  getRefreshTokenFromStorage,
  isRefreshTokenSetInStorage
} from '../../services/local-storage';

import {
  ConfirmBodyType,
  LoginBodyType,
  RepassBodyType,
  RegisterBodyType,
  NewPasswordBodyType
} from '../../types/request-api-types';

import {
  ResponseAPIType,
  LoginPayloadType,
  RegisterPayloadType,
  ConfirmPayloadType,
  RepassPayloadType,
  NewPasswordPayloadType,
  LogoutPayloadType,
  RefreshPayloadType
} from '../../types/response-api-types';

export const registerUserAction = createAsyncThunk<ResponseAPIType<RegisterPayloadType>, RegisterBodyType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}
>
(
  'registerUserAction',
  async ({ firstName, lastName, email, password, repeatPassword }, { extra: api }) => {
    const { data } = await api.post<ResponseAPIType<RegisterPayloadType>>(
      APIRoutes.Register,
      { firstName, lastName, email, password, repeatPassword }
    );

    return data;
  }
);

export const loginUserAction = createAsyncThunk<ResponseAPIType<LoginPayloadType>, LoginBodyType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}
>
(
  'loginAction',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<ResponseAPIType<LoginPayloadType>>(APIRoutes.Login, { email, password });

    return data;
  }
);

export const confirmUserAction = createAsyncThunk<ResponseAPIType<ConfirmPayloadType>, ConfirmBodyType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}
>
(
  'confirmUserAction',
  async ({ confirmID }, { extra: api }) => {
    const { data } = await api.post<ResponseAPIType<ConfirmPayloadType>>(APIRoutes.Confirm, { confirmID });

    return data;
  }
);

export const repassUserAction = createAsyncThunk<ResponseAPIType<RepassPayloadType>, RepassBodyType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}
>
(
  'repassUserAction',
  async ({ email }, { extra: api }) => {
    const { data } = await api.post<ResponseAPIType<RepassPayloadType>>(APIRoutes.Repass, { email });

    return data;
  }
);

export const newPasswordUserAction = createAsyncThunk<ResponseAPIType<NewPasswordPayloadType>, NewPasswordBodyType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}
>
(
  'newPasswordUserAction',
  async ({ repassID, newPassword, newRepeatPassword }, { extra: api }) => {
    const { data } = await api.post<ResponseAPIType<NewPasswordPayloadType>>(APIRoutes.NewPassword, { repassID, newPassword, newRepeatPassword });

    return data;
  }
);

export const logoutUserAction = createAsyncThunk<ResponseAPIType<LogoutPayloadType>, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}
>
(
  'logoutUserAction',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<ResponseAPIType<LogoutPayloadType>>(APIRoutes.Logout);

    return data;
  }
);

export const refreshAuthAction = createAsyncThunk<ResponseAPIType<RefreshPayloadType>, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}
>
(
  'refreshAuthAction',
  async (_args, { extra: api }) => {
    let response;

    switch (true) {
      case isClientDomainLocalhost():
        const refreshToken = isRefreshTokenSetInStorage() ? getRefreshTokenFromStorage() : Symbols.Empty;

        response = await api.post<ResponseAPIType<RefreshPayloadType>>(APIRoutes.Refresh, { refreshToken });
        break;
    
      default:
        response = await api.get<ResponseAPIType<RefreshPayloadType>>(APIRoutes.Refresh);
        break;
    }

    return response.data;
  }
);

