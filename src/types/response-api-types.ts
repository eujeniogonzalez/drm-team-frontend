import { TaskType, TasksInfoType } from './task-types';

export type ResponseAPIType<T> = {
  success: boolean,
  message: string,
  payload: T
};

export type RegisterPayloadType = null;

export type LoginPayloadType = {
  accessToken: string,
  refreshToken?: string
};

export type RefreshPayloadType = {
  accessToken: string,
  refreshToken?: string
};

export type ConfirmPayloadType = null;

export type RepassPayloadType = null;

export type NewPasswordPayloadType = null;

export type LogoutPayloadType = null;

export type NewTaskPayloadType = null;

export type CurrentTasksPayloadType = {
  tasksInfo: TasksInfoType,
  tasks: TaskType[]
};

export type UpdateTaskPayloadType = {
  task: TaskType,
  tasksInfo: TasksInfoType
};
