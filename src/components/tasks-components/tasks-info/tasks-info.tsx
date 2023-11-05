import './tasks-info.scss';
import React from 'react';
import { useAppSelector } from '../../../hooks';
import { getTasksInfo } from '../../../store/processes/task-process/task-selectors';
import Loader from '../../loader/loader';
import { LoaderColors, LoaderSizes } from '../../../const/classnames-const';
import { getAuthorizationStatus } from '../../../store/processes/user-process/user-selectors';
import { AuthStatuses } from '../../../const/common-const';

function TasksInfo() {
  const tasksInfo = useAppSelector(getTasksInfo);
  const authStatus = useAppSelector(getAuthorizationStatus);

  if (authStatus !== AuthStatuses.Auth) return;

  const loader = <Loader size={LoaderSizes.Micro} color={LoaderColors.White} />

  return (
    <div className='tasks-info'>
      <div className='tasks-info-total'>Всего задач: <span>{tasksInfo.totalCount || loader}</span></div>
    </div>
  );
}

export default TasksInfo;
