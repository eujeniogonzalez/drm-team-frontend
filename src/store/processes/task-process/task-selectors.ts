import { NameSpace } from '../../../const/common-const';
import { UsersRunningTaskIDType } from '../../../types/users-running-task-id-type';
import { APIResponseType, StateType } from '../../../types/state-types';
import { TaskType, TasksInfoType } from '../../../types/task-types';

export const getIsTaskRequestInProgress = (state: StateType): boolean => (
  state[NameSpace.Task].isTaskRequestInProgress
);

export const getIsTaskRequestSuccess = (state: StateType): boolean => (
  state[NameSpace.Task].isTaskRequestSuccess
);

export const getTaskAPIResponse = (state: StateType): APIResponseType => (
  state[NameSpace.Task].taskAPIResponse
);

export const getCurrentTasks = (state: StateType): TaskType[] => (
  state[NameSpace.Task].tasks
);

export const getTasksInfo = (state: StateType): TasksInfoType => (
  state[NameSpace.Task].tasksInfo
);

export const getUsersRunningTaskID = (state: StateType): UsersRunningTaskIDType => (
  state[NameSpace.Task].tasksInfo.usersRunningTaskID
);

export const getUsersReviewingTaskID = (state: StateType): UsersRunningTaskIDType => (
  state[NameSpace.Task].tasksInfo.usersReviewingTaskID
);

