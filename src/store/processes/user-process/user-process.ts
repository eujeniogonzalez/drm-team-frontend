import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthStatuses, Symbols } from '../../../const/common-const';
import { UserProcess } from '../../../types/state-types';
import { APIActions, API_MESSAGES } from '../../../const/api-const';

import {
  refreshAuthAction,
  loginUserAction,
  registerUserAction,
  confirmUserAction,
  repassUserAction,
  newPasswordUserAction,
  logoutUserAction
} from '../../api-actions';

import {
  deleteRefreshTokenFromStorage,
  isRefreshTokenSetInStorage,
  setRefreshTokenToStorage
} from '../../../services/local-storage';

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
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = action.payload.success;
        state.userAPIResponse.type = APIActions.Register;
        state.userAPIResponse.body = action.payload;
      })
      .addCase(registerUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
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
        const isSuccess = action.payload.success;

        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = isSuccess;
        state.userAPIResponse.type = APIActions.Login;
        state.userAPIResponse.body = action.payload;
        state.authorizationStatus = isSuccess ? AuthStatuses.Auth : AuthStatuses.NoAuth;
        state.accessToken = isSuccess ? action.payload.payload.access_token : Symbols.Empty;

        if (action.payload.payload.refresh_token) setRefreshTokenToStorage(action.payload.payload.refresh_token);
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.type = APIActions.Register;
        state.authorizationStatus = AuthStatuses.NoAuth;
        state.accessToken = Symbols.Empty;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(confirmUserAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
      })
      .addCase(confirmUserAction.fulfilled, (state, action) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = action.payload.success;
        state.userAPIResponse.type = APIActions.Confirm;
        state.userAPIResponse.body = action.payload;
      })
      .addCase(confirmUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.type = APIActions.Confirm;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(repassUserAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
      })
      .addCase(repassUserAction.fulfilled, (state, action) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = action.payload.success;
        state.userAPIResponse.type = APIActions.Repass;
        state.userAPIResponse.body = action.payload;
      })
      .addCase(repassUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.type = APIActions.Repass;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(newPasswordUserAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
      })
      .addCase(newPasswordUserAction.fulfilled, (state, action) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = action.payload.success;
        state.userAPIResponse.type = APIActions.NewPassword;
        state.userAPIResponse.body = action.payload;
      })
      .addCase(newPasswordUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.type = APIActions.NewPassword;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(logoutUserAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
      })
      .addCase(logoutUserAction.fulfilled, (state, action) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = action.payload.success;
        state.userAPIResponse.type = APIActions.Logout;
        state.userAPIResponse.body = action.payload;
        state.authorizationStatus = AuthStatuses.NoAuth;
        state.accessToken = Symbols.Empty;

        if (isRefreshTokenSetInStorage()) deleteRefreshTokenFromStorage();
      })
      .addCase(logoutUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.type = APIActions.Logout;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(refreshAuthAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
      })
      .addCase(refreshAuthAction.fulfilled, (state, action) => {
        const isSuccess = action.payload.success;

        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = isSuccess;
        state.userAPIResponse.type = APIActions.Refresh;
        state.userAPIResponse.body = action.payload;
        state.authorizationStatus = isSuccess ? AuthStatuses.Auth : AuthStatuses.NoAuth;
        state.accessToken = isSuccess ? action.payload.payload.access_token : Symbols.Empty;

        switch (isSuccess) {
          case true:
            if (action.payload.payload.refresh_token) {
              setRefreshTokenToStorage(action.payload.payload.refresh_token); 
            }
            break;
        
          case false:
            deleteRefreshTokenFromStorage()
            break;
        }
      })
      .addCase(refreshAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthStatuses.NoAuth;
        state.accessToken = Symbols.Empty;
      });
  }
});

export const { logout } = userProcess.actions;
