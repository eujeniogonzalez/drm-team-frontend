import './input-email.scss';
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { EMAIL_REGEXP, MAX_EMAIL_LENGTH, Symbols } from '../../../const/common-const';
import InputErrorMessage from '../input-error-message/input-error-message';
import { FORM_MESSAGES } from '../../../const/messages-const';
import { UI_NAMES } from '../../../const/ui-const';
import { useAppSelector } from '../../../hooks';
import { getLanguageCode } from '../../../store/processes/user-process/user-selectors';

type InputEmailPropsType = {
  passEmailToParent: Dispatch<SetStateAction<string>>,
  passEmailValidStatusToParent: Dispatch<SetStateAction<boolean>>,
  isFormTriedToSubmit: boolean,
  resetIsFormTriedToSubmit: Dispatch<SetStateAction<boolean>>,
  isFormDisabled: boolean,
  autofocus?: boolean
}

function InputEmail({
  passEmailToParent,
  passEmailValidStatusToParent,
  isFormTriedToSubmit,
  resetIsFormTriedToSubmit,
  isFormDisabled,
  autofocus = false
}: InputEmailPropsType) {
  const languageCode = useAppSelector(getLanguageCode);
  
  const [email, setEmail] = useState<string>(Symbols.Empty);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [errorShouldBeShown, setErrorShouldBeShown] = useState<boolean>(false);
  const [errorMessage, setErrorMassage] = useState<string>(Symbols.Empty);
  
  const validateEmail = (email: string) => EMAIL_REGEXP.test(email);

  const getEmailErrorMessage = (email: string) => {
    let errorMessage: string = Symbols.Empty;

    switch (true) {
      case email === Symbols.Empty:
        errorMessage = FORM_MESSAGES.EMAIL_EMPTY[languageCode];
        break;
    
      case !isEmailValid:
        errorMessage = FORM_MESSAGES.EMAIL_INCORRECT[languageCode];
        break;
    }

    return errorMessage;
  };

  useEffect(() => {
    if (!errorShouldBeShown) return;

    setErrorMassage(getEmailErrorMessage(email));
  }, [languageCode]);

  if (!isEmailValid && isFormTriedToSubmit && !errorShouldBeShown) {
    setErrorShouldBeShown(true);
    setErrorMassage(getEmailErrorMessage(email));
  };

  const showErrors = () => {
    if (email === Symbols.Empty) return;

    switch (isEmailValid) {
      case true:
        setErrorShouldBeShown(false);
        setErrorMassage(Symbols.Empty);
        break;
    
      case false:
        setErrorShouldBeShown(true);
        setErrorMassage(getEmailErrorMessage(email));
        break;
    }
  };

  const inputEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (errorShouldBeShown) setErrorShouldBeShown(false);
    if (errorMessage !== Symbols.Empty) setErrorMassage(Symbols.Empty);
    if (isFormTriedToSubmit) resetIsFormTriedToSubmit(false);

    const email = e.target.value;
    const isEmailValid = validateEmail(email);

    setEmail(email);
    setIsEmailValid(isEmailValid);
    passEmailValidStatusToParent(isEmailValid);
  };

  const blurEmailHandler = () => {
    showErrors();
    passEmailToParent(email);
  };

  return (
    <div className='input-email'>
      <input 
        className={`input ${errorShouldBeShown ? 'input-wrong' : Symbols.Empty}`}
        type='text'
        placeholder={UI_NAMES.E_MAIL[languageCode]}
        name='email'
        maxLength={MAX_EMAIL_LENGTH}
        autoFocus={autofocus}
        disabled={isFormDisabled}
        value={email}
        onInput={inputEmailHandler}
        onBlur={blurEmailHandler}
      />

      <InputErrorMessage message={errorMessage} />
    </div>
  );
}

export default InputEmail;
