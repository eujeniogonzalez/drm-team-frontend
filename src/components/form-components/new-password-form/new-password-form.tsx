import './new-password-form.scss';
import { Symbols } from '../../../const/common-const';
import { useAppDispatch } from '../../../hooks';
import React, { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { newPasswordUserAction } from '../../../store/api-actions';
import InputPassword from '../input-password/input-password';
import SubmitButton from '../submit-button/submit-button';

function NewPasswordForm() {
  const dispatch = useAppDispatch();
  const { repassID } = useParams();
  const [password, setPassword] = useState<string>(Symbols.Empty);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [repeatPassword, setRepeatPassword] = useState<string>(Symbols.Empty);
  const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState<boolean>(false);
  const [isFormTriedToSubmit, setIsFormTriedToSubmit] = useState<boolean>(false);

  const submitNewPasswordFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsFormTriedToSubmit(true);

    if (!isPasswordValid || !isRepeatPasswordValid || password !== repeatPassword) return;

    if (repassID) {
      dispatch(newPasswordUserAction({ repassID, new_password: password, new_repeat_password: repeatPassword }));
    }
  };

  return (
    <div className='new-password-form-content'>
      <div className='new-password-form-title'>Новый пароль</div>

      <form onSubmit={submitNewPasswordFormHandler}>
        <InputPassword
          passPasswordToParent={setPassword}
          passPasswordValidStatusToParent={setIsPasswordValid}
          isFormTriedToSubmit={isFormTriedToSubmit}
          resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
          placeholder='Придумайте пароль'
          autofocus={true}
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
          submitButtonClickHandler={submitNewPasswordFormHandler}
          buttonText='Изменить пароль'
        />
      </form>
    </div>
  );
}

export default NewPasswordForm;