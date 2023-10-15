export type RegisterBody = {
  email: string;
  password: string;
  repeatPassword: string;
};

export type LoginBody = {
  email: string;
  password: string;
};

export type ConfirmBody = {
  confirmID: string;
};

export type RepassBody = {
  email: string;
};

export type NewPasswordBody = {
  repassID: string;
  newPassword: string;
  newRepeatPassword: string;
};

export type NewTaskBody = {
  title: string;
  description: string;
  parentTaskID: null | string;
};

