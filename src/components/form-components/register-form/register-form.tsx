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
      <div className='register-form-title'>Регистрация</div>
      
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
          placeholder='Придумайте пароль'
        />
        
        <InputPassword
          passPasswordToParent={setRepeatPassword}
          passPasswordValidStatusToParent={setIsRepeatPasswordValid}
          isFormTriedToSubmit={isFormTriedToSubmit}
          resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
          passwordForMatching={password}
          placeholder='Повторите пароль'
        />

        <SubmitButton
          submitButtonClickHandler={submitRegisterFormHandler}
          buttonText='Зарегистрироваться'
        />
      </form>

      <div className='register-form-links'>
        <Link className='dark-link register-form-links-item' to={AppRoutes.Login}>Войти</Link>
        <Link className='dark-link register-form-links-item' to={AppRoutes.Repass}>Вспомнить пароль</Link>
      </div>
    </div>
  );
}

export default RegisterForm;