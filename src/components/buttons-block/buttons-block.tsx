import './buttons-block.scss';
import React from 'react';

type ButtonsBlockProps = {
  children: JSX.Element | JSX.Element[]
};

function ButtonsBlock({children}: ButtonsBlockProps) {
  if (!children) return;

  return (
    <div className='buttons-block'>
      {children}
    </div>
  );
}

export default ButtonsBlock;
