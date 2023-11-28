import './submit-button.scss';
import React, { FormEvent } from 'react';
import Loader from '../../page-components/loader/loader';
import { LoaderColors, LoaderSizes } from '../../../const/classnames-const';

type SubmitButtonPropsType = {
  submitButtonClickHandler: (e: FormEvent<HTMLFormElement>) => void,
  buttonText: string,
  isFormDisabled: boolean
};

function SubmitButton({
  submitButtonClickHandler,
  buttonText,
  isFormDisabled
}: SubmitButtonPropsType) {
  const loader = <Loader color={LoaderColors.White} size={LoaderSizes.Micro} />;

  return (
    <button
      className='button button-main-color submit-button'
      type='submit'
      disabled={isFormDisabled}
      onClick={() => submitButtonClickHandler}
    >
      {isFormDisabled ? loader : buttonText}
    </button>
  );
}

export default SubmitButton;
