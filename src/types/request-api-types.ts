import { UpdateTaskAPIMicroActions } from '../const/api-const';

export type RegisterBodyType = {
  email: string,
  password: string,
  repeatPassword: string
};

export type LoginBodyType = {
  email: string,
  password: string
};

export type ConfirmBodyType = {
  confirmID: string
};

export type RepassBodyType = {
  email: string
};

export type NewPasswordBodyType = {
  repassID: string,
  newPassword: string,
  newRepeatPassword: string
};

export type NewTaskBodyType = {
  title: string,
  description: string,
  parentTaskID: null | string
};

export type CurrentTasksParamsBodyType = {
  quantityPerPage: string,
  pageNumber: string
};

export type UpdateTaskBodyType = {
  action: UpdateTaskAPIMicroActions,
  taskID: string
};
