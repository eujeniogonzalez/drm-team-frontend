import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const/common-const';
import { TaskProcess } from '../../../types/state-types';
import { APIActions, API_MESSAGES } from '../../../const/api-const';
import { createTaskAction } from '../../api-actions';

const initialState: TaskProcess = {
  isTaskRequestInProgress: false,
  isTaskRequestSuccess: false,
  tasks: [],
  taskAPIResponse: {
    type: null,
    body: null
  }
};

export const taskProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    resetTaskAPIResponse: (state) => {
      state.isTaskRequestInProgress = false;
      state.isTaskRequestSuccess = false;
      state.taskAPIResponse = {
        type: null,
        body: null
      };
    }
  },
  extraReducers(builder) {
    builder
      .addCase(createTaskAction.pending, (state) => {
        state.isTaskRequestInProgress = true;
        state.isTaskRequestSuccess = false;
        state.taskAPIResponse.type = APIActions.CreateTask;
        state.taskAPIResponse.body = null;
      })
      .addCase(createTaskAction.fulfilled, (state, action) => {
        state.isTaskRequestInProgress = false;
        state.isTaskRequestSuccess = action.payload.success;
        state.taskAPIResponse.body = action.payload;
      })
      .addCase(createTaskAction.rejected, (state) => {
        state.isTaskRequestInProgress = false;
        state.isTaskRequestSuccess = false;
        state.taskAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
  }
});

export const { resetTaskAPIResponse } = taskProcess.actions;
