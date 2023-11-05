import './task-details.scss';
import React from 'react';
import { TaskType } from '../../../types/task-types';
import Wrapper from '../../wrapper/wrapper';
import AssignTaskButton from '../assign-task-button/assign-task-button';
import TaskStatus from '../task-status/task-status';
import ReviewTaskButton from '../review-task-button/review-task-button';
import Sticker from '../../sticker/sticker';
import { UI_NAMES } from '../../../const/ui-const';
import { useAppSelector } from '../../../hooks';
import { getUsersRunningTaskID } from '../../../store/processes/task-process/task-selectors';
import { MESSAGES } from '../../../const/messages-const';
import { WRAPPER_MIN_HEIGHT } from '../../../const/common-const';

type TaskDetailsPropsType = {
  task: TaskType
};

function TaskDetails({ task }: TaskDetailsPropsType) {
  const usersRunningTaskID = useAppSelector(getUsersRunningTaskID);
  const isTaskMine = task.id === usersRunningTaskID;
  const isTaskFree = !task.executorID;
  const isTaskAvailable = isTaskMine || (!usersRunningTaskID && isTaskFree);

  const showControlButtons = () => {
    if (!isTaskAvailable) return;
    
    return (
      <Wrapper minHeight={30}>
        <AssignTaskButton task={task} />
        <ReviewTaskButton task={task} />
      </Wrapper>    
    );
  };

  const showWarning = () => {
    if (isTaskAvailable) return;

    return <div className='task-not-available'>{MESSAGES.TASK_NOT_AVAILABLE_FOR_YOU}</div>;
  };

  return (
    <div className='task-details'>
      <Wrapper minHeight={WRAPPER_MIN_HEIGHT}>
        <TaskStatus taskStatus={task.status} />

        <Sticker text={UI_NAMES.MY_TASK} isStickerShouldBeShown={isTaskMine} />
      </Wrapper>      
      
      {showWarning()}

      <div className='task-title'>{task.title}</div>
      <div className='task-description'>{task.description}</div>

      {showControlButtons()}
    </div>
  );
}

export default TaskDetails;
