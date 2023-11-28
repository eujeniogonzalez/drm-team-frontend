import './content.scss';
import React from 'react';
import { ContentPropsType } from '../../../types/content-props-type';

function Content({children}: ContentPropsType) {
  return (
    <div className='page-content'>
      {children}
    </div>
  );
}

export default Content;