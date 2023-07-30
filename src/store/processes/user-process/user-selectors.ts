import { AuthStatuses, NameSpace } from '../../../const/common-const';
import { State } from '../../../types/state-types';
import { Token } from '../../../types/token-type';

export const getAccessToken = (state: State): Token => state[NameSpace.User].accessToken;

