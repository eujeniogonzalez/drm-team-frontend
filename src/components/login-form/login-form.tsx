import './login-form.scss';
import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { Symbols } from '../../const/common-const';
import { useAppDispatch } from '../../hooks';
import { loginUserAction } from '../../store/api-actions';

function LoginForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>(Symbols.Empty);
  const [password, setPassword] = useState<string>(Symbols.Empty);

  const inputEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const inputPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginButtonClickHandler = () => {
    const loginBody = { email, password };

    dispatch(loginUserAction(loginBody));
  };
  
  return (
    <>
      <div className="login-form-content">
        <div className="login-form-title">Вход</div>
        
        <input 
          className="input login-form-input-login"
          type="text"
          placeholder="E-mail"
          autoFocus
          value={email}
          onInput={inputEmailHandler}
        />

        <input
          className="input login-form-input-password"
          type="password"
          placeholder="Придумайте пароль"
          value={password}
          onInput={inputPasswordHandler}
        />

        <input
          className="submit login-form-submit-button" 
          type="submit" 
          value="Зарегистрироваться" 
          onClick={loginButtonClickHandler} 
        />

        <div className="login-form-links">
          <Link className="dark-link login-form-links-item" to={AppRoutes.Repass}>Вспомнить пароль</Link>
          <Link className="dark-link login-form-links-item" to={AppRoutes.Register}>Регистрация</Link>
        </div>
      </div>
    </>
  );
}

export default LoginForm;