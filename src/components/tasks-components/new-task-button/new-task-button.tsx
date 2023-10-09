import React from 'react';
import { UI_NAMES } from '../../../const/ui-const';

function NewTaskButton() {

  return (
    <button className='button'>
      {UI_NAMES.NEW_TASK}
    </button>
  );
}

export default NewTaskButton;
