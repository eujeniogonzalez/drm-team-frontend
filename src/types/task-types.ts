import { TaskStatuses } from '../const/common-const';
import { UsersReviewingTaskIDType } from './users-reviewing-task-id-type';
import { UsersRunningTaskIDType } from './users-running-task-id-type';

export type TaskType = {
  id: number,
  date: number,
  title: string,
  description: string,
  parentTaskID: null | number,
  status: TaskStatuses,
  isArchive: boolean,
  executorID: null | number
};

export type TasksInfoType = {
  totalCount: number | null,
  notArchivedCount: number | null,
  archivedCount: number | null,
  usersRunningTaskID: UsersRunningTaskIDType,
  usersReviewingTaskID: UsersReviewingTaskIDType
};
