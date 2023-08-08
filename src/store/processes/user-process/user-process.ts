import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthStatuses, Symbols } from '../../../const/common-const';
import { UserProcess } from '../../../types/state-types';
import { refreshAuthAction, loginUserAction, registerUserAction } from '../../api-actions';
import { APIActions, API_MESSAGES } from '../../../const/api-const';

const initialState: UserProcess = {
  isUserRequestInProgress: false,
  isUserRequestSuccess: false,
  authorizationStatus: AuthStatuses.Unknown,
  accessToken: Symbols.Empty,
  userAPIResponse: {
    type: null,
    body: null
  }
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    logout: (state) => {
      state.authorizationStatus = AuthStatuses.NoAuth;
      state.accessToken = Symbols.Empty;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(registerUserAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
      })
      .addCase(registerUserAction.fulfilled, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = true;
        state.userAPIResponse.type = null;
        state.userAPIResponse.body = null;
      })
      .addCase(registerUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.userAPIResponse.type = APIActions.Register;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(loginUserAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = true; // todo Проверить если сервер отдал 400 с объектом всех данных, api.
        state.userAPIResponse.type = null;
        state.userAPIResponse.body = null;
        state.authorizationStatus = AuthStatuses.Auth;
        state.accessToken = action.payload.payload.access_token;
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.authorizationStatus = AuthStatuses.NoAuth;
        state.accessToken = Symbols.Empty;
      })
      .addCase(refreshAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatuses.Auth;
        state.accessToken = action.payload;
      })
      .addCase(refreshAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthStatuses.NoAuth;
        state.accessToken = Symbols.Empty;
      });
  }
});

export const { logout } = userProcess.actions;
