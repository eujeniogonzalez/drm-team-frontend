type LoginPayload = {
  access_token: string;
};

export type UserData = {
  success: Boolean;
  message: String;
  payload: LoginPayload;
};
