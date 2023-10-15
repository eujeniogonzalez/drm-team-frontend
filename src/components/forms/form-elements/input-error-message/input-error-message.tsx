import './input-error-message.scss';
import React from 'react';

type InputErrorMessageProps = {
  message: string;
};

function InputErrorMessage({ message }: InputErrorMessageProps) {
  return (
    <div className='input-error-message'>{message}</div>
  );
}

export default InputErrorMessage;