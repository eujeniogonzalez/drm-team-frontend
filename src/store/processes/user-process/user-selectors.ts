import { AuthStatuses, NameSpace } from '../../../const/common-const';
import { State } from '../../../types/state-types';
import { Token } from '../../../types/token-type';

// todo Проверить, используется где-либо или нет
export const getAccessToken = (state: State): Token => state[NameSpace.User].accessToken;
export const getAuthorizationStatus = (state: State): AuthStatuses => state[NameSpace.User].authorizationStatus;

