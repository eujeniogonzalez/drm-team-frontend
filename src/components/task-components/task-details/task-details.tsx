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
import { getUsersReviewingTaskID, getUsersRunningTaskID } from '../../../store/processes/task-process/task-selectors';
import { TaskStatuses, WRAPPER_MIN_HEIGHT } from '../../../const/common-const';
import { getLanguageCode, getUserID } from '../../../store/processes/user-process/user-selectors';
import { MESSAGES } from '../../../const/messages-const';

type TaskDetailsPropsType = {
  task: TaskType
};

function TaskDetails({ task }: TaskDetailsPropsType) {
  const languageCode = useAppSelector(getLanguageCode);
  const usersRunningTaskID = useAppSelector(getUsersRunningTaskID);
  const usersReviewingTaskID = useAppSelector(getUsersReviewingTaskID);
  const userID = useAppSelector(getUserID);

  const isTaskMineAndRunning = task.id === usersRunningTaskID;
  const isTaskFree = !task.executorID;
  const isTaskAvailable = isTaskMineAndRunning || (!usersRunningTaskID && !usersReviewingTaskID && isTaskFree);
  const amITaskExecutor = task.executorID === userID;
  const doIHaveRunningTask = usersRunningTaskID ? true : false;
  const doIHaveReviewingTask = usersReviewingTaskID ? true : false;
  const isTaskDone = task.status === TaskStatuses.Done;
  const isTaskReviewing = task.status === TaskStatuses.Reviewing;

  const showControlButtons = () => {
    if (!isTaskAvailable) return;
    
    return (
      <div className='task-details-control-buttons'>
        <AssignTaskButton task={task} />
        <ReviewTaskButton task={task} />
      </div>
    );
  };

  const getBusyTaskWarningMessage = () => {
    switch (true) {
      case doIHaveRunningTask && isTaskFree:
        return MESSAGES.YOU_ALREADY_HAVE_RUNNING_TASK[languageCode];

      case !isTaskFree && !amITaskExecutor:
        return MESSAGES.TASK_IS_PERFORMED_BY_ANOTHER_USER[languageCode];

      case doIHaveReviewingTask && !amITaskExecutor:
        return MESSAGES.YOU_HAVE_UNREVIEWED_TASK[languageCode];
    }
  };

  const showWarning = () => {
    if (isTaskAvailable || amITaskExecutor || isTaskDone || isTaskReviewing) return;

    return <div className='task-not-available'>{getBusyTaskWarningMessage()}</div>;
  };

  return (
    <div className='task-details'>
      <Wrapper minHeight={WRAPPER_MIN_HEIGHT}>
        <TaskStatus taskStatus={task.status} />

        <TaskSticker text={UI_NAMES.MY_TASK[languageCode]} isTaskStickerShouldBeShown={amITaskExecutor} />
      </Wrapper>      
      
      {showWarning()}

      <div className='task-title'>{task.title}</div>
      <div className='task-description'>{task.description}</div>

      {showControlButtons()}
    </div>
  );
}

export default TaskDetails;
