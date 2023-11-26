import './register-form.scss';
import React, { FormEvent, useEffect, useState } from 'react';
import { AppRoutes } from '../../../../const/router-const';
import { LinksBlockAlignment, Symbols } from '../../../../const/common-const';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { registerUserAction } from '../../../../store/api-actions/user-api-actions';
import InputEmail from '../../form-elements/input-email/input-email';
import InputPassword from '../../form-elements/input-password/input-password';
import SubmitButton from '../../form-elements/submit-button/submit-button';
import { UI_NAMES } from '../../../../const/ui-const';
import LinksBlock from '../../../links-block/links-block';
import { APIActions } from '../../../../const/api-const';
import { showToast } from '../../../../store/processes/toast-process/toast-process';
import { resetUserAPIResponse } from '../../../../store/processes/user-process/user-process';
import InputFirstName from '../../form-elements/input-first-name/input-first-name';
import InputLastName from '../../form-elements/input-last-name/input-last-name';

import {
  getIsUserRequestInProgress,
  getLanguageCode,
  getUserAPIResponse
} from '../../../../store/processes/user-process/user-selectors';

function RegisterForm() {
  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState<string>(Symbols.Empty);
  const [isFirstNameValid, setIsFirstNameValid] = useState<boolean>(false);
  const [lastName, setLastName] = useState<string>(Symbols.Empty);
  const [isLastNameValid, setIsLastNameValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>(Symbols.Empty);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [password, setPassword] = useState<string>(Symbols.Empty);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [repeatPassword, setRepeatPassword] = useState<string>(Symbols.Empty);
  const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState<boolean>(false);
  const [isFormTriedToSubmit, setIsFormTriedToSubmit] = useState<boolean>(false);

  const languageCode = useAppSelector(getLanguageCode);
  const isUserRequestInProgress = useAppSelector(getIsUserRequestInProgress);
  const APIResponse = useAppSelector(getUserAPIResponse);
  const isFormDisabled = isUserRequestInProgress && APIResponse.type === APIActions.Register;
  const isToastShouldBeShown = (
    !APIResponse.body?.success &&
    APIResponse.type === APIActions.Register &&
    APIResponse.body?.message &&
    isFormTriedToSubmit
  );

  useEffect(() => {
    if (isToastShouldBeShown) dispatch(showToast(APIResponse.body?.message));
  });
  
  const isRegisterFormValid = () => {
    return (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isRepeatPasswordValid &&
      password === repeatPassword
    );
  };

  const submitRegisterFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsFormTriedToSubmit(true);

    if (!isRegisterFormValid()) {
      dispatch(resetUserAPIResponse());
      return;
    }

    dispatch(registerUserAction({ firstName, lastName, email, password, repeatPassword }));
  };

  return (
    <div className='register-form-wrapper'>
      <div className='register-form-content'>
        <div className='register-form-title'>{UI_NAMES.REGISTRATION[languageCode]}</div>
        
        <form onSubmit={submitRegisterFormHandler}>
          <InputFirstName
            passFirstNameToParent={setFirstName}
            passFirstNameValidStatusToParent={setIsFirstNameValid}
            isFormTriedToSubmit={isFormTriedToSubmit}
            resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
            isFormDisabled={isFormDisabled}
            autofocus={true}
          />

          <InputLastName
            passLastNameToParent={setLastName}
            passLastNameValidStatusToParent={setIsLastNameValid}
            isFormTriedToSubmit={isFormTriedToSubmit}
            resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
            isFormDisabled={isFormDisabled}
          />

          <InputEmail
            passEmailToParent={setEmail}
            passEmailValidStatusToParent={setIsEmailValid}
            isFormTriedToSubmit={isFormTriedToSubmit}
            resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
            isFormDisabled={isFormDisabled}
          />

          <InputPassword
            passPasswordToParent={setPassword}
            passPasswordValidStatusToParent={setIsPasswordValid}
            isFormTriedToSubmit={isFormTriedToSubmit}
            resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
            placeholder={UI_NAMES.COME_UP_WITH_PASSWORD[languageCode]}
            isFormDisabled={isFormDisabled}
          />
          
          <InputPassword
            passPasswordToParent={setRepeatPassword}
            passPasswordValidStatusToParent={setIsRepeatPasswordValid}
            isFormTriedToSubmit={isFormTriedToSubmit}
            resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
            passwordForMatching={password}
            placeholder={UI_NAMES.REPEAT_PASSWORD[languageCode]}
            isFormDisabled={isFormDisabled}
          />

          <SubmitButton
            submitButtonClickHandler={submitRegisterFormHandler}
            buttonText={UI_NAMES.REGISTER[languageCode]}
            isFormDisabled={isFormDisabled}
          />
        </form>

        <LinksBlock
          links={[
            {route: AppRoutes.Login, anchor: UI_NAMES.ENTER[languageCode]},
            {route: AppRoutes.Repass, anchor: UI_NAMES.RESTORE_PASSWORD[languageCode]}
          ]}
          alignment={LinksBlockAlignment.Horizontal}
        />
      </div>
    </div>
  );
}

export default RegisterForm;