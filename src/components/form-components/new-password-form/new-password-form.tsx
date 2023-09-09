import './new-password-form.scss';
import { Symbols } from '../../../const/common-const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import React, { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { newPasswordUserAction } from '../../../store/api-actions';
import InputPassword from '../input-password/input-password';
import SubmitButton from '../submit-button/submit-button';
import { UI_NAMES } from '../../../const/ui-const';
import { APIActions } from '../../../const/api-const';
import { getIsUserRequestInProgress, getUserAPIResponse } from '../../../store/processes/user-process/user-selectors';

function NewPasswordForm() {
  const dispatch = useAppDispatch();
  const { repassID } = useParams();
  const [newPassword, setNewPassword] = useState<string>(Symbols.Empty);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState<boolean>(false);
  const [newRepeatPassword, setNewRepeatPassword] = useState<string>(Symbols.Empty);
  const [isNewRepeatPasswordValid, setIsNewRepeatPasswordValid] = useState<boolean>(false);
  const [isFormTriedToSubmit, setIsFormTriedToSubmit] = useState<boolean>(false);

  const isUserRequestInProgress = useAppSelector(getIsUserRequestInProgress);
  const APIResponse = useAppSelector(getUserAPIResponse);
  const isFormDisabled = isUserRequestInProgress && APIResponse.type === APIActions.NewPassword;
  
  const submitNewPasswordFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsFormTriedToSubmit(true);

    if (!isNewPasswordValid || !isNewRepeatPasswordValid || newPassword !== newRepeatPassword) return;

    if (repassID) {
      dispatch(newPasswordUserAction({ repassID, newPassword, newRepeatPassword }));
    }
  };

  return (
    <div className='new-password-form-content'>
      <div className='new-password-form-title'>{UI_NAMES.NEW_PASSWORD}</div>

      <form onSubmit={submitNewPasswordFormHandler}>
        <InputPassword
          passPasswordToParent={setNewPassword}
          passPasswordValidStatusToParent={setIsNewPasswordValid}
          isFormTriedToSubmit={isFormTriedToSubmit}
          resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
          placeholder={UI_NAMES.COME_UP_WITH_PASSWORD}
          autofocus={true}
          isFormDisabled={isFormDisabled}
        />

        <InputPassword
          passPasswordToParent={setNewRepeatPassword}
          passPasswordValidStatusToParent={setIsNewRepeatPasswordValid}
          isFormTriedToSubmit={isFormTriedToSubmit}
          resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
          passwordForMatching={newPassword}
          placeholder={UI_NAMES.REPEAT_PASSWORD}
          isFormDisabled={isFormDisabled}
        />

        <SubmitButton
          submitButtonClickHandler={submitNewPasswordFormHandler}
          buttonText={UI_NAMES.CHANGE_PASSWORD}
          isFormDisabled={isFormDisabled}
        />
      </form>
    </div>
  );
}

export default NewPasswordForm;