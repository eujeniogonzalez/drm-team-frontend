import './tasks-info.scss';
import React from 'react';
import { useAppSelector } from '../../../hooks';
import { getTasksInfo } from '../../../store/processes/task-process/task-selectors';
import Loader from '../../page-components/loader/loader';
import { LoaderColors, LoaderSizes } from '../../../const/classnames-const';
import { getAuthorizationStatus, getLanguageCode } from '../../../store/processes/user-process/user-selectors';
import { AuthStatuses } from '../../../const/common-const';
import { UI_NAMES } from '../../../const/ui-const';

function TasksInfo() {
  const languageCode = useAppSelector(getLanguageCode);
  const tasksInfo = useAppSelector(getTasksInfo);
  const authStatus = useAppSelector(getAuthorizationStatus);

  if (authStatus !== AuthStatuses.Auth) return;

  const loader = <Loader size={LoaderSizes.Micro} color={LoaderColors.White} />

  return (
    <div className='tasks-info'>
      <div className='tasks-info-total'>{`${UI_NAMES.TASKS_TOTAL_COUNT[languageCode]}: `}<span>{tasksInfo.totalCount || loader}</span></div>
    </div>
  );
}

export default TasksInfo;
