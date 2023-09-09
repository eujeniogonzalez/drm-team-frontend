import './login-form.scss';
import React, { FormEvent, useEffect, useState } from 'react';
import InputEmail from '../input-email/input-email';
import LinksBlock from '../../links-block/links-block';
import SubmitButton from '../submit-button/submit-button';
import InputPassword from '../input-password/input-password';
import { UI_NAMES } from '../../../const/ui-const';
import { AppRoutes } from '../../../const/router-const';
import { APIActions } from '../../../const/api-const';
import { loginUserAction } from '../../../store/api-actions';
import { LinksBlockAlignment, Symbols } from '../../../const/common-const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getIsUserRequestInProgress, getUserAPIResponse } from '../../../store/processes/user-process/user-selectors';
import { showToast } from '../../../store/processes/toast-process/toast-process';

function LoginForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>(Symbols.Empty);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [password, setPassword] = useState<string>(Symbols.Empty);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [isFormTriedToSubmit, setIsFormTriedToSubmit] = useState<boolean>(false);

  const isUserRequestInProgress = useAppSelector(getIsUserRequestInProgress);
  const APIResponse = useAppSelector(getUserAPIResponse);
  const isFormDisabled = isUserRequestInProgress && APIResponse.type === APIActions.Login;
  const isToastShouldBeShown = (
    !APIResponse.body?.success &&
    APIResponse.type === APIActions.Login &&
    APIResponse.body?.message &&
    isFormTriedToSubmit
  );

  useEffect(() => {
    if (isToastShouldBeShown) dispatch(showToast(APIResponse.body?.message));
  });

  const submitLoginFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsFormTriedToSubmit(true);
    
    if (!isEmailValid || !isPasswordValid) return;
    
    dispatch(loginUserAction({ email, password }));
  };

  return (
    <div className='login-form-content'>
      <div className='login-form-title'>{UI_NAMES.ENTRANCE}</div>

      <form onSubmit={submitLoginFormHandler}>
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
          isFormDisabled={isFormDisabled}
        />

        <SubmitButton
          submitButtonClickHandler={submitLoginFormHandler}
          buttonText={UI_NAMES.ENTER}
          isFormDisabled={isFormDisabled}
        />
      </form>

      <LinksBlock
        links={[
          {route: AppRoutes.Repass, anchor: UI_NAMES.REMEMBER_PASSWORD},
          {route: AppRoutes.Register, anchor: UI_NAMES.REGISTRATION}
        ]}
        alignment={LinksBlockAlignment.Horizontal}
      />
    </div>
  );
}

export default LoginForm;