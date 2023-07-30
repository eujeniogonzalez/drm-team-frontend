import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthStatuses, Symbols } from '../../../const/common-const';
import { UserProcess } from '../../../types/state-types';
import { refreshAuthAction, loginAction } from '../../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthStatuses.Unknown,
  accessToken: Symbols.Empty
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
