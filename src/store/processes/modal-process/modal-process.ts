import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const/common-const';
import { ModalProcessType } from '../../../types/state-types';

const initialState: ModalProcessType = {
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