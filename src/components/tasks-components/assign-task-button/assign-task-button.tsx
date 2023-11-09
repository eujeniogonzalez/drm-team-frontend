import './assign-task-button.scss';
import React, { useEffect, useState } from 'react';
import { UI_NAMES } from '../../../const/ui-const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { TaskStatuses } from '../../../const/common-const';
import { updateTaskAction } from '../../../store/api-actions/task-api-actions';
import { UpdateTaskAPIMicroActions } from '../../../const/api-const';
import { TaskType } from '../../../types/task-types';
import { getIsTaskRequestInProgress } from '../../../store/processes/task-process/task-selectors';
import Loader from '../../loader/loader';
import { ButtonStyles, LoaderColors, LoaderSizes } from '../../../const/classnames-const';
import { getLanguageCode } from '../../../store/processes/user-process/user-selectors';

type AssignTaskButtonPropsType = {
  task: TaskType
};

type UpdateTaskParamsType = UpdateTaskAPIMicroActions.AssignTaskToUser | UpdateTaskAPIMicroActions.UnassignTaskFromUser;

function AssignTaskButton({ task }: AssignTaskButtonPropsType) {
  const dispatch = useAppDispatch();
  const languageCode = useAppSelector(getLanguageCode);
  const isTaskRequestInProgress = useAppSelector(getIsTaskRequestInProgress);
  const isTaskAvailable = task.status === TaskStatuses.New || TaskStatuses.Running || task.status === TaskStatuses.Reviewing;
  const [buttonText, setButtonText] = useState<string>();
  const [buttonStyles, setButtonStyles] = useState<string>();
  const [loaderColor, setLoaderColor] = useState<LoaderColors>(LoaderColors.Grey);
  const [isMicroActionAssignUnassignTask, setIsMicroActionAssignUnassignTask] = useState<boolean>(false);

  useEffect(() => {
    switch (task.status) {
      case TaskStatuses.New:
        setButtonText(UI_NAMES.ASSIGN_TASK[languageCode]);
        setButtonStyles(ButtonStyles.MainColor);
        setLoaderColor(LoaderColors.White);
        break;
    
      case TaskStatuses.Running:
        setButtonText(UI_NAMES.UNASSIGN_TASK[languageCode]);
        setButtonStyles(ButtonStyles.GreyColor);
        setLoaderColor(LoaderColors.Grey);
        break;

      case TaskStatuses.Reviewing:
        setButtonText(UI_NAMES.UNASSIGN_TASK[languageCode]);
        setButtonStyles(`${ButtonStyles.GreyColor} ${ButtonStyles.Unavailable}`);
        setLoaderColor(LoaderColors.Grey);
        break;
    }
  });

  if (!isTaskAvailable) return;

  if (!isTaskRequestInProgress && isMicroActionAssignUnassignTask) setIsMicroActionAssignUnassignTask(false);

  const getbuttonText = () => {
    switch (true) {
      case isTaskRequestInProgress && isMicroActionAssignUnassignTask:
        return <Loader size={LoaderSizes.Micro} color={loaderColor} />;
    
      default:
        return buttonText;
    }
  };

  const updateTask = (action: UpdateTaskParamsType) => {
    if (!action) return;

    dispatch(updateTaskAction({ action, taskID: task.id.toString() }));
  };

  const assignTaskButtonClickHandler = () => {
    switch (task.status) {
      case TaskStatuses.New:
        setIsMicroActionAssignUnassignTask(true);
        updateTask(UpdateTaskAPIMicroActions.AssignTaskToUser);
        break;
    
      case TaskStatuses.Running:
        setIsMicroActionAssignUnassignTask(true);
        updateTask(UpdateTaskAPIMicroActions.UnassignTaskFromUser);
        break;
    }
  };

  return (
    <button
      className={`button assign-task-button ${buttonStyles}`}
      onClick={assignTaskButtonClickHandler}
    >
      {getbuttonText()}
    </button>
  );
}

export default AssignTaskButton;
