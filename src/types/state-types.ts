import { APIActions } from '../const/api-const';
import { AuthStatuses, UserRoles } from '../const/common-const';
import { store } from '../store/index';
import { LoginPayload, RegisterPayload, ResponseAPI } from './response-api-types';
import { IsToastShouldBeShown, ToastMessage } from './toast-types';

export type APIResponse = {
  type: APIActions | null;
  body: ResponseAPI<RegisterPayload | LoginPayload> | null;
};

export type UserProcess = {
  isUserRequestInProgress: boolean;
  isUserRequestSuccess: boolean;
  authorizationStatus: AuthStatuses;
  accessToken: string;
  userRole: UserRoles,
  userAPIResponse: APIResponse;
};

export type ToastProcess = {
  toastMessage: ToastMessage;
  isToastShouldBeShown: IsToastShouldBeShown;
};

export type ModalProcess = {
  isModalShouldBeShown: IsToastShouldBeShown;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
