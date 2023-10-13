import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Symbols } from '../../../const/common-const';
import { ModalProcess } from '../../../types/state-types';

const initialState: ModalProcess = {
  isModalShouldBeShown: false
};

export const modalProcess = createSlice({
  name: NameSpace.Modal,
  initialState,
  reducers: {
    showModal: (state) => {
      state.isModalShouldBeShown = true;
    },
    hideModal: (state) => {
      state.isModalShouldBeShown = false;
    }
  }
});

export const { showModal, hideModal } = modalProcess.actions;