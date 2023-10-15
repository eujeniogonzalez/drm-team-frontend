import React from 'react';
import { UI_NAMES } from '../../../const/ui-const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getUserRole } from '../../../store/processes/user-process/user-selectors';
import { UserRoles } from '../../../const/common-const';
import { showModal } from '../../../store/processes/modal-process/modal-process';
import Modal from '../../modal/modal';
import NewTaskForm from '../../forms/form-components/new-task-form/new-task-form';

function NewTaskButton() {
  const userRole = useAppSelector(getUserRole);
  const isUserAdmin = userRole === UserRoles.Admin;
  const dispatch = useAppDispatch();

  const newTaskButtonHandler = () => {
    dispatch(showModal());
  };
  
  return (
    <>
      <button
        className='button'
        onClick={newTaskButtonHandler}
      >
        {UI_NAMES.NEW_TASK}
      </button>

      {
        isUserAdmin &&
        <Modal>
          <NewTaskForm />
        </Modal>
      }
    </>
  );
}

export default NewTaskButton;
