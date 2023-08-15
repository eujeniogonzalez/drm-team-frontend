import './content.scss';
import React from 'react';
import { ContentProps } from '../../types/content-props-type';

function Content({children}: ContentProps) {
  return (
    <div className='page-content'>
      {children}
    </div>
  );
}

export default Content;