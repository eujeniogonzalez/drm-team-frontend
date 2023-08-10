export type ResponseAPI<T> = {
  success: boolean;
  message: string;
  payload: T;
};

export type RegisterPayload = null;

export type LoginPayload = {
  access_token: string;
};

export type ConfirmPayload = null;

export type RepassPayload = null;

export type NewPasswordPayload = null;

export type LogoutPayload = null;

