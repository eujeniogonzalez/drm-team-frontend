import './repass-form.scss';
import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../const/router-const';
import { useAppDispatch } from '../../../hooks';
import { Symbols } from '../../../const/common-const';
import { repassUserAction } from '../../../store/api-actions';
import InputEmail from '../input-email/input-email';
import SubmitButton from '../submit-button/submit-button';

function RepassForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>(Symbols.Empty);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isFormTriedToSubmit, setIsFormTriedToSubmit] = useState<boolean>(false);

  const submitRepassFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsFormTriedToSubmit(true);

    if (!isEmailValid) return;

    dispatch(repassUserAction({ email }));
  };
  
  return (
    <div className='repass-form-content'>
      <div className='repass-form-title'>Вспомнить пароль</div>

      <form onSubmit={submitRepassFormHandler}>
        <InputEmail
          passEmailToParent={setEmail}
          passEmailValidStatusToParent={setIsEmailValid}
          isFormTriedToSubmit={isFormTriedToSubmit}
          resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
        />

        <SubmitButton
          submitButtonClickHandler={submitRepassFormHandler}
          buttonText='Вспомнить'
        />
      </form>

      <div className='repass-form-links'>
        <Link className='dark-link repass-form-links-item' to={AppRoutes.Login}>Войти</Link>
        <Link className='dark-link repass-form-links-item' to={AppRoutes.Register}>Регистрация</Link>
      </div>
    </div>
  );
}

export default RepassForm;