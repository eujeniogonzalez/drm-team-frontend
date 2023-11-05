import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatchType } from '../../types/state-types';
import { AxiosInstance } from 'axios';
import { StateType } from '../../types/state-types';
import { APIRoutes } from '../../const/api-const';
import { generatePath } from 'react-router-dom';

import {
  NewTaskBodyType,
  CurrentTasksParamsBodyType,
  UpdateTaskBodyType
} from '../../types/request-api-types';

import {
  ResponseAPIType,
  NewTaskPayloadType,
  CurrentTasksPayloadType,
  UpdateTaskPayloadType
} from '../../types/response-api-types';

export const createTaskAction = createAsyncThunk<ResponseAPIType<NewTaskPayloadType>, NewTaskBodyType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}
>
(
  'createTaskAction',
  async ({ title, description, parentTaskID }, { extra: api }) => {
    const { data } = await api.post<ResponseAPIType<NewTaskPayloadType>>(APIRoutes.TasksInfo, { title, description, parentTaskID });

    return data;
  }
);

export const getCurrentTasksAction = createAsyncThunk<ResponseAPIType<CurrentTasksPayloadType>, CurrentTasksParamsBodyType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}
>
(
  'getCurrentTasksAction',
  async ({ quantityPerPage, pageNumber }, { extra: api }) => {
    const { data } = await api.get<ResponseAPIType<CurrentTasksPayloadType>>(
      generatePath(APIRoutes.CurrentTasks,
      { quantityPerPage, pageNumber })
    );

    return data;
  }
);

export const updateTaskAction = createAsyncThunk<ResponseAPIType<UpdateTaskPayloadType>, UpdateTaskBodyType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}
>
(
  'updateTaskAction',
  async ({ action, taskID }, { extra: api }) => {
    const { data } = await api.patch<ResponseAPIType<UpdateTaskPayloadType>>(APIRoutes.TasksInfo, { action, taskID });

    return data;
  }
);
