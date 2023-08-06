import './register-form.scss';
import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { Symbols } from '../../const/common-const';
import { useAppDispatch } from '../../hooks';
import { registerUserAction } from '../../store/api-actions';

function RegisterForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>(Symbols.Empty);
  const [password, setPassword] = useState<string>(Symbols.Empty);
  const [repeatPassword, setRepeatPassword] = useState<string>(Symbols.Empty);

  const inputEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const inputPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const inputRepeatPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  const registerButtonClickHandler = () => {
    const registerBody = { email, password, repeatPassword };

    dispatch(registerUserAction(registerBody));
  };

  return (
    <>
      <div className="register-form-content">
        <div className="register-form-title">Регистрация</div>
        
        <input 
          className="input register-form-input-login"
          type="text"
          placeholder="E-mail"
          autoFocus
          value={email}
          onInput={inputEmailHandler}
        />

        <input
          className="input register-form-input-password"
          type="password"
          placeholder="Придумайте пароль"
          value={password}
          onInput={inputPasswordHandler}
        />

        <input
          className="input register-form-repeat-password"
          type="password"
          placeholder="Повторите пароль"
          value={repeatPassword}
          onInput={inputRepeatPasswordHandler}
        />
        
        <input
          className="submit register-form-submit-button" 
          type="submit" 
          value="Зарегистрироваться" 
          onClick={registerButtonClickHandler} 
        />

        <div className="register-form-links">
          <Link className="dark-link register-form-links-item" to={AppRoutes.Login}>Войти</Link>
          <Link className="dark-link register-form-links-item" to={AppRoutes.Repass}>Вспомнить пароль</Link>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;