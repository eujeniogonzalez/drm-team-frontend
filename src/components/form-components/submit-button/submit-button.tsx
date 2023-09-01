import './submit-button.scss';
import React from 'react';
import Loader from '../../loader/loader';
import { LoaderColors, LoaderSizes } from '../../../const/loader-const';
import { SubmitButtonProps } from '../../../types/form-props-types';

function SubmitButton({
  submitButtonClickHandler,
  buttonText,
  isFormDisabled
}: SubmitButtonProps) {
  const loader = <Loader color={LoaderColors.White} size={LoaderSizes.Micro} />;

  return (
    <button
      className='button submit-button'
      type='submit'
      disabled={isFormDisabled}
      onClick={() => submitButtonClickHandler}
    >
      {isFormDisabled ? loader : buttonText}
    </button>
  );
}

export default SubmitButton;