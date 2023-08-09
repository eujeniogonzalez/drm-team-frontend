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
