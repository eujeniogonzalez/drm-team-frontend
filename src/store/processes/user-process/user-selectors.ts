import { AuthStatuses, NameSpace, UserRoles } from '../../../const/common-const';
import { APIResponse, State } from '../../../types/state-types';
import { Token } from '../../../types/token-type';

export const getAccessToken = (state: State): Token => state[NameSpace.User].accessToken;
export const getAuthorizationStatus = (state: State): AuthStatuses => state[NameSpace.User].authorizationStatus;
export const getIsUserRequestInProgress = (state: State): boolean => state[NameSpace.User].isUserRequestInProgress;
// todo Выяснить, нужен ли вообще флаг isUserRequestSuccess
export const getIsUserRequestSuccess = (state: State): boolean => state[NameSpace.User].isUserRequestSuccess;
export const getUserAPIResponse = (state: State): APIResponse => state[NameSpace.User].userAPIResponse;
export const getUserRole = (state: State): UserRoles => state[NameSpace.User].userRole;


