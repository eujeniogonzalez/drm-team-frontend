import { APIActions } from '../const/api-const';
import { AuthStatuses, UserRoles } from '../const/common-const';
import { store } from '../store/index';
import { TaskType, TasksInfoType } from './task-types';
import { IsToastShouldBeShownType, ToastMessageType } from './toast-types';

import {
  CurrentTasksPayloadType,
  LoginPayloadType,
  RegisterPayloadType,
  ResponseAPIType,
  UpdateTaskPayloadType
} from './response-api-types';

export type APIResponseType = {
  type: APIActions | null,
  body: ResponseAPIType<RegisterPayloadType | LoginPayloadType | CurrentTasksPayloadType | UpdateTaskPayloadType> | null;
};

export type UserProcessType = {
  isUserRequestInProgress: boolean,
  authorizationStatus: AuthStatuses,
  accessToken: string,
  userRole: UserRoles,
  userID: UserIDType,
  userAPIResponse: APIResponseType
};

export type ToastProcessType = {
  toastMessage: ToastMessageType,
  isToastShouldBeShown: IsToastShouldBeShownType
};

export type ModalProcessType = {
  isModalShouldBeShown: IsToastShouldBeShownType
};

export type TaskProcessType = {
  isTaskRequestInProgress: boolean,
  isTaskRequestSuccess: boolean,
  tasksInfo: TasksInfoType,
  tasks: TaskType[],
  taskAPIResponse: APIResponseType
};

export type UserIDType = number | null;

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
