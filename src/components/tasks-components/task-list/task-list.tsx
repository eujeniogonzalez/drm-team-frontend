import './task-list.scss';
import React, { useEffect } from 'react';
import Loader from '../../loader/loader';
import Message from '../../message/message';
import TaskItem from '../task-item/task-item';
import UIBlocker from '../../ui-blocker/ui-blocker';
import { TaskType } from '../../../types/task-types';
import { UI_NAMES } from '../../../const/ui-const';
import { APIActions } from '../../../const/api-const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getLanguageCode, getUserID } from '../../../store/processes/user-process/user-selectors';
import { showToast } from '../../../store/processes/toast-process/toast-process';

import {
  LoaderColors,
  LoaderSizes
} from '../../../const/classnames-const';

import {
  getCurrentTasks,
  getIsTaskRequestInProgress,
  getTaskAPIResponse
} from '../../../store/processes/task-process/task-selectors';

function TaskList() {
  const dispatch = useAppDispatch();
  const languageCode = useAppSelector(getLanguageCode);
  const currentTasks = useAppSelector(getCurrentTasks);
  const isTaskRequestInProgress = useAppSelector(getIsTaskRequestInProgress);
  const APIResponse = useAppSelector(getTaskAPIResponse);
  const userID = useAppSelector(getUserID);
  const isToastShouldBeShown = (
    !APIResponse.body?.success &&
    APIResponse.type === APIActions.UpdateTask &&
    APIResponse.body?.message
  );

  useEffect(() => {
    if (isToastShouldBeShown) dispatch(showToast(APIResponse.body?.message));
  });

  const renderTasks = (tasks: TaskType[]) => {
    return tasks.map((task) => <TaskItem task={task} userID={userID} key={task.id} />);
  };

  const getTaskListContent = () => {
    switch (true) {
      case !currentTasks.length && isTaskRequestInProgress && APIResponse.type === APIActions.GetCurrentTasks:
        return <Loader size={LoaderSizes.Large} color={LoaderColors.White} />;

      case currentTasks.length && isTaskRequestInProgress && APIResponse.type === APIActions.GetCurrentTasks:
        return (
          <>
            <UIBlocker />
            <div className='task-list'>{renderTasks(currentTasks)}</div>
          </>
        );
    
      case !currentTasks.length:
        return <Message message={UI_NAMES.TASK_LIST_EMPTY[languageCode]} />;

      default:
        return <div className='task-list'>{renderTasks(currentTasks)}</div>;
    }
  };

  return (
    <div className='task-list-wrapper'>
      {getTaskListContent()}
    </div>
  );
}

export default TaskList;
