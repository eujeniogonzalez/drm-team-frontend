export type RegisterBody = {
  email: string;
  password: string;
  repeatPassword: string;
};

export type LoginBody = {
  email: string;
  password: string;
};
