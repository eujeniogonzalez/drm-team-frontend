import './review-task-button.scss';
import React, { useEffect, useState } from 'react';
import { UI_NAMES } from '../../../const/ui-const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { TaskStatuses } from '../../../const/common-const';
import { updateTaskAction } from '../../../store/api-actions/task-api-actions';
import { UpdateTaskAPIMicroActions } from '../../../const/api-const';
import { TaskType } from '../../../types/task-types';
import { getIsTaskRequestInProgress } from '../../../store/processes/task-process/task-selectors';
import Loader from '../../page-components/loader/loader';
import { ButtonStyles, LoaderColors, LoaderSizes } from '../../../const/classnames-const';
import { getLanguageCode } from '../../../store/processes/user-process/user-selectors';

type ReviewTaskButtonPropsType = {
  task: TaskType
};

type UpdateTaskParamsType = UpdateTaskAPIMicroActions.SendTaskForReview;

function ReviewTaskButton({ task }: ReviewTaskButtonPropsType) {
  const dispatch = useAppDispatch();
  const languageCode = useAppSelector(getLanguageCode);
  const isTaskRequestInProgress = useAppSelector(getIsTaskRequestInProgress);
  const isTaskAvailable = task.status === TaskStatuses.New || TaskStatuses.Running || task.status === TaskStatuses.Reviewing;
  const [buttonText, setButtonText] = useState<string>();
  const [buttonStyles, setButtonStyles] = useState<string>();
  const [loaderColor, setLoaderColor] = useState<LoaderColors>(LoaderColors.Grey);
  const [isMicroActionSendTaskForReview, setIsMicroActionSendTaskForReview] = useState<boolean>(false);

  useEffect(() => {
    switch (task.status) {
      case TaskStatuses.New:
        setButtonText(UI_NAMES.SEND_TASK_FOR_REVIEW[languageCode]);
        setButtonStyles(`${ButtonStyles.GreyColor} ${ButtonStyles.Unavailable}`);
        setLoaderColor(LoaderColors.Grey);
        break;

      case TaskStatuses.Running:
        setButtonText(UI_NAMES.SEND_TASK_FOR_REVIEW[languageCode]);
        setButtonStyles(ButtonStyles.MainColor);
        setLoaderColor(LoaderColors.White);
        break;
    
      case TaskStatuses.Reviewing:
        setButtonText(UI_NAMES.TASK_IS_REVIEWING[languageCode]);
        setButtonStyles(`${ButtonStyles.GreyColor} ${ButtonStyles.Unavailable}`);
        setLoaderColor(LoaderColors.Grey);
        break;
    }
  });

  if (!isTaskAvailable) return;

  if (!isTaskRequestInProgress && isMicroActionSendTaskForReview) setIsMicroActionSendTaskForReview(false);

  const getbuttonText = () => {
    switch (true) {
      case isTaskRequestInProgress && isMicroActionSendTaskForReview:
        return <Loader size={LoaderSizes.Micro} color={loaderColor} />;
    
      default:
        return buttonText;
    }
  };

  const updateTask = (action: UpdateTaskParamsType) => {
    dispatch(updateTaskAction({ action, taskID: task.id.toString() }));
  };

  const reviewTaskButtonClickHandler = async () => {
    if (task.status !== TaskStatuses.Running) return;

    setIsMicroActionSendTaskForReview(true);

    updateTask(UpdateTaskAPIMicroActions.SendTaskForReview);
  };

  return (
    <button
      className={`button review-task-button ${buttonStyles}`}
      onClick={reviewTaskButtonClickHandler}
    >
      {getbuttonText()}
    </button>
  );
}

export default ReviewTaskButton;
