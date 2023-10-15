import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/common-const';
import { userProcess } from './processes/user-process/user-process';
import { toastProcess } from './processes/toast-process/toast-process';
import { modalProcess } from './processes/modal-process/modal-process';
import { taskProcess } from './processes/task-process/task-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Toast]: toastProcess.reducer,
  [NameSpace.Modal]: modalProcess.reducer,
  [NameSpace.Task]: taskProcess.reducer
});

