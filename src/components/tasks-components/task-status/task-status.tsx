import './task-status.scss';
import React from 'react';
import { TaskStatuses } from '../../../const/common-const';
import { UI_NAMES } from '../../../const/ui-const';
import { TaskStatusIndicatorColors } from '../../../const/classnames-const';

type TaskStatusPropsType = {
  taskStatus: TaskStatuses
};

function TaskStatus({ taskStatus }: TaskStatusPropsType) {

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
        return UI_NAMES.TASK_STATUS_DESCRIPTIONS.NEW;

      case taskStatus === TaskStatuses.Running:
        return UI_NAMES.TASK_STATUS_DESCRIPTIONS.RUNNING;

      case taskStatus === TaskStatuses.Reviewing:
        return UI_NAMES.TASK_STATUS_DESCRIPTIONS.REVIEWING;

      case taskStatus === TaskStatuses.Done:
        return UI_NAMES.TASK_STATUS_DESCRIPTIONS.DONE;
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
