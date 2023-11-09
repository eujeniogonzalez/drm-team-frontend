import './task-status.scss';
import React from 'react';
import { TaskStatuses } from '../../../const/common-const';
import { UI_NAMES } from '../../../const/ui-const';
import { TaskStatusIndicatorColors } from '../../../const/classnames-const';
import { useAppSelector } from '../../../hooks';
import { getLanguageCode } from '../../../store/processes/user-process/user-selectors';

type TaskStatusPropsType = {
  taskStatus: TaskStatuses
};

function TaskStatus({ taskStatus }: TaskStatusPropsType) {
  const languageCode = useAppSelector(getLanguageCode);

  const getIndicatorColorClass = () => {
    switch (true) {
      case taskStatus === TaskStatuses.New:
        return TaskStatusIndicatorColors.New;

      case taskStatus === TaskStatuses.Running:
        return TaskStatusIndicatorColors.Running;

      case taskStatus === TaskStatuses.Reviewing:
        return TaskStatusIndicatorColors.Reviewing;

      case taskStatus === TaskStatuses.Done:
        return TaskStatusIndicatorColors.Done;
    }
  };

  const getStatusDescription = () => {
    switch (true) {
      case taskStatus === TaskStatuses.New:
        return UI_NAMES.TASK_STATUS_DESCRIPTIONS.NEW[languageCode];

      case taskStatus === TaskStatuses.Running:
        return UI_NAMES.TASK_STATUS_DESCRIPTIONS.RUNNING[languageCode];

      case taskStatus === TaskStatuses.Reviewing:
        return UI_NAMES.TASK_STATUS_DESCRIPTIONS.REVIEWING[languageCode];

      case taskStatus === TaskStatuses.Done:
        return UI_NAMES.TASK_STATUS_DESCRIPTIONS.DONE[languageCode];
    }
  };

  return (
    <div className='task-status'>
      <div className={`task-status-indicator ${getIndicatorColorClass()}`}></div>
      <div className='task-status-description'>{getStatusDescription()}</div>
    </div>
  );
}

export default TaskStatus;
