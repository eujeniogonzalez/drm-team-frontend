import { AuthStatuses, NameSpace, UserRoles } from '../../../const/common-const';
import { APIResponseType, StateType, UserIDType } from '../../../types/state-types';
import { TokenType } from '../../../types/token-type';

export const getAccessToken = (state: StateType): TokenType => state[NameSpace.User].accessToken;
export const getAuthorizationStatus = (state: StateType): AuthStatuses => state[NameSpace.User].authorizationStatus;
export const getIsUserRequestInProgress = (state: StateType): boolean => state[NameSpace.User].isUserRequestInProgress;
export const getUserAPIResponse = (state: StateType): APIResponseType => state[NameSpace.User].userAPIResponse;
export const getUserRole = (state: StateType): UserRoles => state[NameSpace.User].userRole;
export const getUserID = (state: StateType): UserIDType => state[NameSpace.User].userID;


