import { NameSpace } from '../../../const/common-const';
import { APIResponse, State } from '../../../types/state-types';

export const getIsTaskRequestInProgress = (state: State): boolean => state[NameSpace.Task].isTaskRequestInProgress;
export const getIsTaskRequestSuccess = (state: State): boolean => state[NameSpace.Task].isTaskRequestSuccess;
export const getTaskAPIResponse = (state: State): APIResponse => state[NameSpace.Task].taskAPIResponse;

