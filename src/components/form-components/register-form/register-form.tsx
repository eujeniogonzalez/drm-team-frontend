import './register-form.scss';
import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../const/router-const';
import { Symbols } from '../../../const/common-const';
import { useAppDispatch } from '../../../hooks';
import { registerUserAction } from '../../../store/api-actions';
import InputEmail from '../input-email/input-email';
import InputPassword from '../input-password/input-password';
import SubmitButton from '../submit-button/submit-button';
import { UI_NAMES } from '../../../const/ui-const';

function RegisterForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>(Symbols.Empty);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [password, setPassword] = useState<string>(Symbols.Empty);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [repeatPassword, setRepeatPassword] = useState<string>(Symbols.Empty);
  const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState<boolean>(false);
  const [isFormTriedToSubmit, setIsFormTriedToSubmit] = useState<boolean>(false);

  const submitRegisterFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsFormTriedToSubmit(true);

    if (!isEmailValid || !isPasswordValid || !isRepeatPasswordValid || password !== repeatPassword) return;

    dispatch(registerUserAction({ email, password, repeatPassword }));
  };

  return (
    <div className='register-form-content'>
      <div className='register-form-title'>{UI_NAMES.REGISTRATION}</div>
      
      <form onSubmit={submitRegisterFormHandler}>
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
          placeholder={UI_NAMES.COME_UP_WITH_PASSWORD}
        />
        
        <InputPassword
          passPasswordToParent={setRepeatPassword}
          passPasswordValidStatusToParent={setIsRepeatPasswordValid}
          isFormTriedToSubmit={isFormTriedToSubmit}
          resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
          passwordForMatching={password}
          placeholder={UI_NAMES.REPEAT_PASSWORD}
        />

        <SubmitButton
          submitButtonClickHandler={submitRegisterFormHandler}
          buttonText={UI_NAMES.REGISTER}
        />
      </form>

      <div className='register-form-links'>
        <Link className='dark-link register-form-links-item' to={AppRoutes.Login}>{UI_NAMES.ENTER}</Link>
        <Link className='dark-link register-form-links-item' to={AppRoutes.Repass}>{UI_NAMES.REMEMBER_PASSWORD}</Link>
      </div>
    </div>
  );
}

export default RegisterForm;