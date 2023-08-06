export type ResponseAPI<T> = {
  success: boolean;
  message: string;
  payload: T;
};

export type RegisterPayload = null;

export type LoginPayload = {
  access_token: string;
};


