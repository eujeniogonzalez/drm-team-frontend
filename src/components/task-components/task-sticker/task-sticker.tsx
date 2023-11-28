import './task-sticker.scss';
import React from 'react';

type TaskStickerPropsType = {
  text: string,
  isTaskStickerShouldBeShown: boolean
};

function TaskSticker({ text, isTaskStickerShouldBeShown }: TaskStickerPropsType) {
  if (!isTaskStickerShouldBeShown) return;

  return <div className='task-sticker'>{text}</div>;
}

export default TaskSticker;
