import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/common-const';
import { userProcess } from './processes/user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer
});

