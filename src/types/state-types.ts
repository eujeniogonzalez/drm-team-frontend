import { AuthStatuses } from '../const/common-const';
import { store } from '../store/index';

export type UserProcess = {
  authorizationStatus: AuthStatuses;
  accessToken: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
