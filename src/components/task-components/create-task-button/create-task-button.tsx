import React, { useState } from 'react';
import { UI_NAMES } from '../../../const/ui-const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getLanguageCode, getUserRole } from '../../../store/processes/user-process/user-selectors';
import { UserRoles } from '../../../const/common-const';
import { showModal } from '../../../store/processes/modal-process/modal-process';
import Modal from '../../page-components/modal/modal';
import CreateTaskForm from '../new-task-form/new-task-form';
import { getIsModalShouldBeShown } from '../../../store/processes/modal-process/modal-selectors';

function CreateTaskButton() {
  const dispatch = useAppDispatch();
  const languageCode = useAppSelector(getLanguageCode);
  const userRole = useAppSelector(getUserRole);
  const isModalShouldBeShown = useAppSelector(getIsModalShouldBeShown);
  const isUserAdmin = userRole === UserRoles.Admin;
  const [isCreateTaskFormShouldBeShown, setIsCreateTaskFormShouldBeShown] = useState(false);

  if (!isUserAdmin) return;

  if (!isModalShouldBeShown && isCreateTaskFormShouldBeShown) setIsCreateTaskFormShouldBeShown(false);

  const createTaskButtonHandler = () => {
    setIsCreateTaskFormShouldBeShown(true);

    dispatch(showModal());
  };

  return (
    <>
      <button
        className='button button-main-color'
        onClick={createTaskButtonHandler}
      >
        {UI_NAMES.NEW_TASK[languageCode]}
      </button>

      {isCreateTaskFormShouldBeShown && <Modal>
        <CreateTaskForm />
      </Modal>}
    </>
  );
}

export default CreateTaskButton;
