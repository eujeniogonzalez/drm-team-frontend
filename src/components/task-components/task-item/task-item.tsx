import './task-item.scss';
import React, { useState } from 'react';
import { TaskType } from '../../../types/task-types';
import TaskStatus from '../task-status/task-status';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../store/processes/modal-process/modal-process';
import Modal from '../../page-components/modal/modal';
import { useAppSelector } from '../../../hooks';
import { getIsModalShouldBeShown } from '../../../store/processes/modal-process/modal-selectors';
import TaskDetails from '../task-details/task-details';
import Wrapper from '../../page-components/wrapper/wrapper';
import TaskSticker from '../task-sticker/task-sticker';
import { UI_NAMES } from '../../../const/ui-const';
import { UserIDType } from '../../../types/state-types';
import { getLanguageCode } from '../../../store/processes/user-process/user-selectors';

type TaskPropsType = {
  task: TaskType,
  userID: UserIDType
};

function TaskItem({ task, userID }: TaskPropsType) {
  const dispatch = useDispatch();
  const languageCode = useAppSelector(getLanguageCode);
  const isModalShouldBeShown = useAppSelector(getIsModalShouldBeShown);
  const isMyTask = task.executorID === userID;
  const [isTaskDetailsShouldBeShown, setIsTaskDetailsShouldBeShown] = useState(false);
  
  if (!isModalShouldBeShown && isTaskDetailsShouldBeShown) setIsTaskDetailsShouldBeShown(false);

  const taskItemClickHandler = () => {
    setIsTaskDetailsShouldBeShown(true);

    dispatch(showModal());
  };
  
  return (
    <>
      <div className='task-item' onClick={taskItemClickHandler}>
        <div className='task-content'>
          <Wrapper minHeight={30}>
            <TaskStatus taskStatus={task.status} />

            <TaskSticker text={UI_NAMES.MY_TASK[languageCode]} isTaskStickerShouldBeShown={isMyTask} />
          </Wrapper>

          <div className='task-title'>{task.title}</div>
        </div>
      </div>

      {isTaskDetailsShouldBeShown && <Modal>
        <TaskDetails task={task} />
      </Modal>}
    </>
  );
}

export default TaskItem;
