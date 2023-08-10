import './new-password-form.scss';
import { Symbols } from '../../const/common-const';
import { useAppDispatch } from '../../hooks';
import React, { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { newPasswordUserAction } from '../../store/api-actions';

function NewPasswordForm() {
  const dispatch = useAppDispatch();
  const { repassID } = useParams();
  const [password, setPassword] = useState<string>(Symbols.Empty);
  const [repeatPassword, setRepeatPassword] = useState<string>(Symbols.Empty);

  const inputPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const inputRepeatPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  const newPasswordButtonClickHandler = () => {
    if (repassID) {
      dispatch(newPasswordUserAction({ repassID, new_password: password, new_repeat_password: repeatPassword }));
    }
  };

  return (
    <div className="new-password-form-content">
      <div className="new-password-form-title">Новый пароль</div>

      <input
        className="input new-password-form-input-password"
        type="password"
        placeholder="Придумайте пароль"
        value={password}
        onInput={inputPasswordHandler}
      />

      <input
        className="input new-password-form-input-password"
        type="password"
        placeholder="Повторите пароль"
        value={repeatPassword}
        onInput={inputRepeatPasswordHandler}
      />

      <input
        className="submit new-password-form-submit-button" 
        type="submit"
        value="Сохранить"
        onClick={newPasswordButtonClickHandler}
      />
    </div>
  );
}

export default NewPasswordForm;