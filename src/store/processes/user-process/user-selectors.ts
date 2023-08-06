import { AuthStatuses, NameSpace } from '../../../const/common-const';
import { APIResponse, State } from '../../../types/state-types';
import { Token } from '../../../types/token-type';

export const getUserAPIResponse = (state: State): APIResponse => state[NameSpace.User].userAPIResponse;
export const getAccessToken = (state: State): Token => state[NameSpace.User].accessToken;
export const getAuthorizationStatus = (state: State): AuthStatuses => state[NameSpace.User].authorizationStatus;

