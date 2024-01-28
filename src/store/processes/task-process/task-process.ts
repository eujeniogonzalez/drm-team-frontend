import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const/common-const';
import { TaskProcessType } from '../../../types/state-types';
import { APIActions, API_MESSAGES } from '../../../const/api-const';
import { createTaskAction, getCurrentTasksAction, updateTaskAction } from '../../api-actions/task-api-actions';
import { TaskType, TasksInfoType } from '../../../types/task-types';

const initialState: TaskProcessType = {
  isTaskRequestInProgress: false,
  isTaskRequestSuccess: false,
  tasksInfo: {
    totalCount: null,
    notArchivedCount: null,
    archivedCount: null,
    usersRunningTaskID: null,
    usersReviewingTaskID: null
  },
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
      .addCase(getCurrentTasksAction.pending, (state) => {
        state.isTaskRequestInProgress = true;
        state.isTaskRequestSuccess = false;
        state.taskAPIResponse.type = APIActions.GetCurrentTasks;
        state.taskAPIResponse.body = null;
      })
      .addCase(getCurrentTasksAction.fulfilled, (state, action) => {
        const tasksInfo = action.payload.payload.tasksInfo;
        
        state.isTaskRequestInProgress = false;
        state.isTaskRequestSuccess = action.payload.success;
        state.tasksInfo = tasksInfo;
        state.tasks = action.payload.payload.tasks;
        state.taskAPIResponse.body = action.payload;
      })
      .addCase(getCurrentTasksAction.rejected, (state) => {
        state.isTaskRequestInProgress = false;
        state.isTaskRequestSuccess = false;
        state.taskAPIResponse.body = {
          success: false,
          message: API_MESSAGES.FILED,
          payload: null
        }
      })
      .addCase(updateTaskAction.pending, (state) => {
        state.isTaskRequestInProgress = true;
        state.isTaskRequestSuccess = false;
        state.taskAPIResponse.type = APIActions.UpdateTask;
        state.taskAPIResponse.body = null;
      })
      .addCase(updateTaskAction.fulfilled, (state, action) => {
        let updatedTask: TaskType;
        let tasksInfo: TasksInfoType;

        state.isTaskRequestInProgress = false;
        state.isTaskRequestSuccess = action.payload.success;
        state.taskAPIResponse.body = action.payload;

        if (action.payload.payload) {
          updatedTask = action.payload.payload.task;
          tasksInfo = action.payload.payload.tasksInfo;

          state.tasks = state.tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
          state.tasksInfo = tasksInfo;
        }
      })
      .addCase(updateTaskAction.rejected, (state) => {
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
