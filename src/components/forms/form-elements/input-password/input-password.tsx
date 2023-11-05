import './input-password.scss';
import React, { KeyboardEvent, ChangeEvent, useState, Dispatch, SetStateAction } from 'react';
import { MAX_PASSWORD_LENGTH, PASSWORD_REGEXP, Symbols } from '../../../../const/common-const';
import InputErrorMessage from '../input-error-message/input-error-message';
import { FORM_MESSAGES } from '../../../../const/messages-const';
import { UI_NAMES } from '../../../../const/ui-const';

type InputPasswordPropsType = {
  passPasswordToParent: Dispatch<SetStateAction<string>>,
  passPasswordValidStatusToParent: Dispatch<SetStateAction<boolean>>,
  isFormTriedToSubmit: boolean,
  autofocus?: boolean,
  resetIsFormTriedToSubmit: Dispatch<SetStateAction<boolean>>,
  passwordForMatching?: string,
  placeholder?: string,
  isFormDisabled: boolean
}

function InputPassword({
  passPasswordToParent,
  passPasswordValidStatusToParent,
  isFormTriedToSubmit,
  resetIsFormTriedToSubmit,
  passwordForMatching,
  placeholder = UI_NAMES.PASSWORD,
  autofocus = false,
  isFormDisabled
}: InputPasswordPropsType) {
  const [password, setPassword] = useState<string>(Symbols.Empty);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [errorShouldBeShown, setErrorShouldBeShown] = useState<boolean>(false);
  const [errorMessage, setErrorMassage] = useState<string>(Symbols.Empty);

  if (!isPasswordValid && isFormTriedToSubmit && !errorShouldBeShown) {
    const errorMessage = password === Symbols.Empty ? FORM_MESSAGES.PASSWORD_EMPTY : FORM_MESSAGES.PASSWORD_INCORRECT;

    setErrorShouldBeShown(true);
    setErrorMassage(errorMessage);
  };

  const validatePassword = (password: string) => PASSWORD_REGEXP.test(password);

  const showErrors = () => {
    if (password === Symbols.Empty) return;

    switch (true) {
      case !isPasswordValid:
        setErrorShouldBeShown(true);
        setErrorMassage(FORM_MESSAGES.PASSWORD_INCORRECT);
        break;
        
      case (passwordForMatching && passwordForMatching !== password):
        setErrorShouldBeShown(true);
        setErrorMassage(FORM_MESSAGES.PASSWORDS_NOT_MATCH);
        break;

      case isPasswordValid:
        setErrorShouldBeShown(false);
        setErrorMassage(Symbols.Empty);
        break;
    }
  };

  const inputPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (errorShouldBeShown) setErrorShouldBeShown(false);
    if (errorMessage !== Symbols.Empty) setErrorMassage(Symbols.Empty);
    if (isFormTriedToSubmit) resetIsFormTriedToSubmit(false);

    const password = e.target.value;
    const isPasswordValid = validatePassword(password);

    setPassword(password);
    setIsPasswordValid(isPasswordValid);
    passPasswordValidStatusToParent(isPasswordValid);
  };

  const blurPasswordHandler = () => {
    showErrors();
    passPasswordToParent(password);
  };

  const keyDownPasswordHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    showErrors();
    passPasswordToParent(password);
  };

  return (
    <div className='input-password'>
      <input
        className={`input ${errorShouldBeShown ? 'input-wrong' : Symbols.Empty}`}
        type='password'
        placeholder={placeholder}
        autoComplete='off'
        autoFocus={autofocus}
        disabled={isFormDisabled}
        maxLength={MAX_PASSWORD_LENGTH}
        value={password}
        onInput={inputPasswordHandler}
        onBlur={blurPasswordHandler}
        onKeyDown={keyDownPasswordHandler}
      />

      <InputErrorMessage message={errorMessage} />
    </div>
  );
}

export default InputPassword;