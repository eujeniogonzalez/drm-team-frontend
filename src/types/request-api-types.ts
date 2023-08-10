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
  new_password: string;
  new_repeat_password: string;
};

