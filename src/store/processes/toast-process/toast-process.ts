import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Symbols } from '../../../const/common-const';
import { ToastProcess } from '../../../types/state-types';

const initialState: ToastProcess = {
  toastMessage: Symbols.Empty,
  isToastShouldBeShown: false
};

export const toastProcess = createSlice({
  name: NameSpace.Toast,
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.isToastShouldBeShown = true
      state.toastMessage = action.payload;
    },
    hideToast: (state) => {
      state.isToastShouldBeShown = false;
      state.toastMessage = Symbols.Empty;
    }
  }
});

export const { showToast, hideToast } = toastProcess.actions;
