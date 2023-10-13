import React from 'react';
import { UI_NAMES } from '../../../const/ui-const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getUserRole } from '../../../store/processes/user-process/user-selectors';
import { UserRoles } from '../../../const/common-const';
import { showModal } from '../../../store/processes/modal-process/modal-process';
import Modal from '../../modal/modal';

function NewTaskButton() {
  const userRole = useAppSelector(getUserRole);
  const isUserAdmin = userRole === UserRoles.Admin;
  const dispatch = useAppDispatch();

  if (!isUserAdmin) return;

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

      <Modal>
        <h1>Hello</h1>
      </Modal>
    </>
  );
}

export default NewTaskButton;
