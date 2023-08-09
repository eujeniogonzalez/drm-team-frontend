import './repass-form.scss';
import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { useAppDispatch } from '../../hooks';
import { Symbols } from '../../const/common-const';
import { repassUserAction } from '../../store/api-actions';

function RepassForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>(Symbols.Empty);

  const inputEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const repassButtonClickHandler = () => {
    dispatch(repassUserAction({ email }));
  };
  
  return (
    <div className="repass-form-content">
      <div className="repass-form-title">Вспомнить пароль</div>
      
      <input 
        className="input repass-form-input-login"
        type="text"
        placeholder="E-mail"
        autoFocus
        value={email}
        onInput={inputEmailHandler}
      />

      <input
        className="submit repass-form-submit-button"
        type="submit"
        value="Вспомнить"
        onClick={repassButtonClickHandler}
      />

      <div className="repass-form-links">
        <Link className="dark-link repass-form-links-item" to={AppRoutes.Login}>Войти</Link>
        <Link className="dark-link repass-form-links-item" to={AppRoutes.Register}>Регистрация</Link>
      </div>
    </div>
  );
}

export default RepassForm;