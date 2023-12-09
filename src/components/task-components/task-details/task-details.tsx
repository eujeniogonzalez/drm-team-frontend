import './task-details.scss';
import React from 'react';
import { TaskType } from '../../../types/task-types';
import Wrapper from '../../page-components/wrapper/wrapper';
import AssignTaskButton from '../assign-task-button/assign-task-button';
import TaskStatus from '../task-status/task-status';
import ReviewTaskButton from '../review-task-button/review-task-button';
import TaskSticker from '../task-sticker/task-sticker';
import { UI_NAMES } from '../../../const/ui-const';
import { useAppSelector } from '../../../hooks';
import { getUsersRunningTaskID } from '../../../store/processes/task-process/task-selectors';
import { MESSAGES } from '../../../const/messages-const';
import { WRAPPER_MIN_HEIGHT } from '../../../const/common-const';
import { getLanguageCode } from '../../../store/processes/user-process/user-selectors';

type TaskDetailsPropsType = {
  task: TaskType
};

function TaskDetails({ task }: TaskDetailsPropsType) {
  const languageCode = useAppSelector(getLanguageCode);
  const usersRunningTaskID = useAppSelector(getUsersRunningTaskID);
  const isTaskMine = task.id === usersRunningTaskID;
  const isTaskFree = !task.executorID;
  const isTaskAvailable = isTaskMine || (!usersRunningTaskID && isTaskFree);

  const showControlButtons = () => {
    if (!isTaskAvailable) return;
    
    return (
      <div className='task-details-control-buttons'>
        <AssignTaskButton task={task} />
        <ReviewTaskButton task={task} />
      </div>
    );
  };

  const showWarning = () => {
    if (isTaskAvailable) return;

    return <div className='task-not-available'>{MESSAGES.TASK_NOT_AVAILABLE_FOR_YOU[languageCode]}</div>;
  };

  return (
    <div className='task-details'>
      <Wrapper minHeight={WRAPPER_MIN_HEIGHT}>
        <TaskStatus taskStatus={task.status} />

        <TaskSticker text={UI_NAMES.MY_TASK[languageCode]} isTaskStickerShouldBeShown={isTaskMine} />
      </Wrapper>      
      
      {showWarning()}

      <div className='task-title'>{task.title}</div>
      <div className='task-description'>{task.description}</div>

      {showControlButtons()}
    </div>
  );
}

export default TaskDetails;