import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthStatuses, Symbols, UserRoles } from '../../../const/common-const';
import { UserProcess } from '../../../types/state-types';
import { APIActions, API_MESSAGES } from '../../../const/api-const';
import { getUserRoleByAccessToken } from '../../../utils';

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
  userRole: UserRoles.Unknown,
  userAPIResponse: {
    type: null,
    body: null
  }
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    resetUserAPIResponse: (state) => {
      state.isUserRequestInProgress = false;
      state.isUserRequestSuccess = false;
      state.authorizationStatus = AuthStatuses.Unknown;
      state.accessToken = Symbols.Empty;
      state.userRole = UserRoles.Unknown;
      state.userAPIResponse = {
        type: null,
        body: null
      };
    },
    logout: (state) => {
      state.authorizationStatus = AuthStatuses.NoAuth;
      state.accessToken = Symbols.Empty;
      state.userRole = UserRoles.Unknown;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(registerUserAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.type = APIActions.Register;
        state.userAPIResponse.body = null;
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = action.payload.success;
        state.userAPIResponse.body = action.payload;
      })
      .addCase(registerUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(loginUserAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.type = APIActions.Login;
        state.userAPIResponse.body = null;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        const isSuccess = action.payload.success;
        const accessToken = isSuccess ? action.payload.payload.accessToken : Symbols.Empty;
        const refreshToken = (isSuccess && action.payload.payload.refreshToken) ? action.payload.payload.refreshToken : null;
        
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = isSuccess;
        state.userAPIResponse.body = action.payload;
        state.authorizationStatus = isSuccess ? AuthStatuses.Auth : AuthStatuses.NoAuth;
        state.accessToken = accessToken;
        state.userRole = getUserRoleByAccessToken(accessToken);

        if (refreshToken) setRefreshTokenToStorage(refreshToken);
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
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
        state.userAPIResponse.type = APIActions.Confirm;
        state.userAPIResponse.body = null;
      })
      .addCase(confirmUserAction.fulfilled, (state, action) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = action.payload.success;
        state.userAPIResponse.body = action.payload;
      })
      .addCase(confirmUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(repassUserAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.type = APIActions.Repass;
        state.userAPIResponse.body = null;
      })
      .addCase(repassUserAction.fulfilled, (state, action) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = action.payload.success;
        state.userAPIResponse.body = action.payload;
      })
      .addCase(repassUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(newPasswordUserAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.type = APIActions.NewPassword;
        state.userAPIResponse.body = null;
      })
      .addCase(newPasswordUserAction.fulfilled, (state, action) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = action.payload.success;
        state.userAPIResponse.body = action.payload;
      })
      .addCase(newPasswordUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(logoutUserAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.type = APIActions.Logout;
        state.userAPIResponse.body = null;
      })
      .addCase(logoutUserAction.fulfilled, (state, action) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = action.payload.success;
        state.userAPIResponse.body = action.payload;
        state.authorizationStatus = AuthStatuses.NoAuth;
        state.accessToken = Symbols.Empty;
        state.userRole = UserRoles.Unknown;

        if (isRefreshTokenSetInStorage()) deleteRefreshTokenFromStorage();
      })
      .addCase(logoutUserAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(refreshAuthAction.pending, (state) => {
        state.isUserRequestInProgress = true;
        state.isUserRequestSuccess = false;
        state.userAPIResponse.type = null;
        state.userAPIResponse.body = null;
      })
      .addCase(refreshAuthAction.fulfilled, (state, action) => {
        const isSuccess = action.payload.success;
        const accessToken = isSuccess ? action.payload.payload.accessToken : Symbols.Empty;

        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = isSuccess;
        state.authorizationStatus = isSuccess ? AuthStatuses.Auth : AuthStatuses.NoAuth;
        state.accessToken = accessToken;
        state.userRole = isSuccess ? getUserRoleByAccessToken(accessToken) : UserRoles.Unknown;

        switch (isSuccess) {
          case true:
            if (action.payload.payload.refreshToken) {
              setRefreshTokenToStorage(action.payload.payload.refreshToken); 
            }
            break;
        
          case false:
            deleteRefreshTokenFromStorage()
            break;
        }
      })
      .addCase(refreshAuthAction.rejected, (state) => {
        state.isUserRequestInProgress = false;
        state.isUserRequestSuccess = false;
        state.authorizationStatus = AuthStatuses.NoAuth;
        state.accessToken = Symbols.Empty;
        state.userAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      });
  }
});

export const { logout, resetUserAPIResponse } = userProcess.actions;
