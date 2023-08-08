import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthStatuses, Symbols } from '../../../const/common-const';
import { UserProcess } from '../../../types/state-types';
import { refreshAuthAction, loginAction, registerUserAction } from '../../api-actions';
import { APIActions, API_MESSAGES } from '../../../const/api-const';

const initialState: UserProcess = {
  isRegisterInProgress: false,
  isUserRegistered: false,
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
        state.isRegisterInProgress = true;
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.isRegisterInProgress = false;
        state.isUserRegistered = true;
        state.userAPIResponse.type = null;
        state.userAPIResponse.body = null;
      })
      .addCase(registerUserAction.rejected, (state) => {
        state.isRegisterInProgress = false;
        state.userAPIResponse.type = APIActions.Register;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(refreshAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatuses.Auth;
        state.accessToken = action.payload;
      })
      .addCase(refreshAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthStatuses.NoAuth;
        state.accessToken = Symbols.Empty;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatuses.Auth;
        state.accessToken = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthStatuses.NoAuth;
        state.accessToken = Symbols.Empty;
      });
  }
});

export const { logout } = userProcess.actions;
