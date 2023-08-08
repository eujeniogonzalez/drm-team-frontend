import { APIActions } from '../const/api-const';
import { AuthStatuses } from '../const/common-const';
import { store } from '../store/index';
import { RegisterPayload, ResponseAPI } from './response-api-types';

export type APIResponse = {
  type: APIActions | null;
  body: ResponseAPI<RegisterPayload> | null;
};

export type UserProcess = {
  isRegisterInProgress: boolean;
  isUserRegistered: boolean;
  authorizationStatus: AuthStatuses;
  accessToken: string;
  userAPIResponse: APIResponse;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
