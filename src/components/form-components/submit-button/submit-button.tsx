import './submit-button.scss';
import React from 'react';
import { useAppSelector } from '../../../hooks';
import { getIsUserRequestInProgress } from '../../../store/processes/user-process/user-selectors';
import Loader from '../../loader/loader';
import { LoaderColors, LoaderSizes } from '../../../const/loader-const';
import { SubmitButtonProps } from '../../../types/form-props-types';

function SubmitButton({ submitButtonClickHandler }: SubmitButtonProps) {
  const isUserRequestInProgress = useAppSelector(getIsUserRequestInProgress);

  return (
    <button
      className='button submit-button'
      type='submit'
      onClick={() => submitButtonClickHandler}
    >
      {isUserRequestInProgress ? <Loader color={LoaderColors.White} size={LoaderSizes.Micro} /> : 'Войти'}
    </button>
  );
}

export default SubmitButton;