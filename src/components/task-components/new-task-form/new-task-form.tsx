import './new-task-form.scss';
import { Symbols } from '../../../const/common-const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import React, { FormEvent, useEffect, useState } from 'react';
import SubmitButton from '../../form-components/submit-button/submit-button';
import { UI_NAMES } from '../../../const/ui-const';
import { APIActions, TasksPagination } from '../../../const/api-const';
import { showToast } from '../../../store/processes/toast-process/toast-process';
import Textarea from '../../form-components/textarea/textarea';
import { createTaskAction, getCurrentTasksAction } from '../../../store/api-actions/task-api-actions';
import { getIsTaskRequestInProgress, getTaskAPIResponse } from '../../../store/processes/task-process/task-selectors';
import { hideModal } from '../../../store/processes/modal-process/modal-process';
import { resetTaskAPIResponse } from '../../../store/processes/task-process/task-process';
import { getLanguageCode } from '../../../store/processes/user-process/user-selectors';

function NewTaskForm() {
  const dispatch = useAppDispatch();
  const [taskTitle, setTaskTitle] = useState<string>(Symbols.Empty);
  const [isTaskTitleValid, setIsTaskTitleValid] = useState<boolean>(false);
  const [taskDescription, setTaskDescription] = useState<string>(Symbols.Empty);
  const [isTaskDescriptionValid, setIsTaskDescriptionValid] = useState<boolean>(false);
  const [isFormTriedToSubmit, setIsFormTriedToSubmit] = useState<boolean>(false);

  const languageCode = useAppSelector(getLanguageCode);
  const isTaskRequestInProgress = useAppSelector(getIsTaskRequestInProgress);
  const APIResponse = useAppSelector(getTaskAPIResponse);
  const isFormDisabled = isTaskRequestInProgress && APIResponse.type === APIActions.CreateTask;
  const isModalShouldBeClosed = APIResponse.body?.success && APIResponse.type === APIActions.CreateTask;
  
  const isToastShouldBeShown = (
    !APIResponse.body?.success &&
    APIResponse.type === APIActions.CreateTask &&
    APIResponse.body?.message &&
    isFormTriedToSubmit
  );

  useEffect(() => {    
    if (isToastShouldBeShown) dispatch(showToast(APIResponse.body?.message));

    if (isModalShouldBeClosed) {
      dispatch(hideModal());
      dispatch(resetTaskAPIResponse());
    };
  });
  
  const submitNewTaskFormHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsFormTriedToSubmit(true);

    if (!isTaskTitleValid || !isTaskDescriptionValid) return;

    await dispatch(createTaskAction({ title: taskTitle, description: taskDescription, parentTaskID: null }));
    await dispatch(getCurrentTasksAction({
      quantityPerPage: TasksPagination.QuantityPerPage,
      pageNumber: TasksPagination.PageNumber
    }));
  };

  return (
    <div className='new-task-form-content'>
      <div className='new-task-form-title'>{UI_NAMES.NEW_TASK[languageCode]}</div>

      <form onSubmit={submitNewTaskFormHandler}>

        <Textarea
          passTextToParent={setTaskTitle}
          passTextValidStatusToParent={setIsTaskTitleValid}
          isFormTriedToSubmit={isFormTriedToSubmit}
          resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
          isFormDisabled={isFormDisabled}
          placeholder={UI_NAMES.TASK_NAME[languageCode]}
          autoFocus={true}
          rows={2}
        />

        <Textarea
          passTextToParent={setTaskDescription}
          passTextValidStatusToParent={setIsTaskDescriptionValid}
          isFormTriedToSubmit={isFormTriedToSubmit}
          resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
          isFormDisabled={isFormDisabled}
          placeholder={UI_NAMES.TASK_DESCRIPTION[languageCode]}
          autoFocus={false}
          rows={5}
        />

        <SubmitButton
          submitButtonClickHandler={submitNewTaskFormHandler}
          buttonText={UI_NAMES.CREATE_TASK[languageCode]}
          isFormDisabled={isFormDisabled}
        />

      </form>

    </div>
  );
}

export default NewTaskForm;