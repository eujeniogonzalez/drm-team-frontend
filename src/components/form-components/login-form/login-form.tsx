import './login-form.scss';
import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../const/router-const';
import { Symbols } from '../../../const/common-const';
import { useAppDispatch } from '../../../hooks';
import { loginUserAction } from '../../../store/api-actions';
import InputEmail from '../input-email/input-email';
import InputPassword from '../input-password/input-password';
import SubmitButton from '../submit-button/submit-button';
import { UI_NAMES } from '../../../const/ui-const';

function LoginForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>(Symbols.Empty);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [password, setPassword] = useState<string>(Symbols.Empty);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [isFormTriedToSubmit, setIsFormTriedToSubmit] = useState<boolean>(false);

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
        />

        <InputPassword
          passPasswordToParent={setPassword}
          passPasswordValidStatusToParent={setIsPasswordValid}
          isFormTriedToSubmit={isFormTriedToSubmit}
          resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
        />

        <SubmitButton
          submitButtonClickHandler={submitLoginFormHandler}
          buttonText={UI_NAMES.ENTER}
        />
      </form>

      <div className='login-form-links'>
        <Link className='dark-link login-form-links-item' to={AppRoutes.Repass}>{UI_NAMES.REMEMBER_PASSWORD}</Link>
        <Link className='dark-link login-form-links-item' to={AppRoutes.Register}>{UI_NAMES.REGISTRATION}</Link>
      </div>
    </div>
  );
}

export default LoginForm;