import './textarea.scss';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Symbols } from '../../../../const/common-const';
import InputErrorMessage from '../input-error-message/input-error-message';
import { FORM_MESSAGES } from '../../../../const/messages-const';

export type TextareaPropsType = {
  passTextToParent: Dispatch<SetStateAction<string>>,
  passTextValidStatusToParent: Dispatch<SetStateAction<boolean>>,
  isFormTriedToSubmit: boolean,
  resetIsFormTriedToSubmit: Dispatch<SetStateAction<boolean>>,
  isFormDisabled: boolean,
  placeholder: string,
  autoFocus: boolean,
  rows: number
}

function Textarea({
  passTextToParent,
  passTextValidStatusToParent,
  isFormTriedToSubmit,
  resetIsFormTriedToSubmit,
  isFormDisabled,
  placeholder,
  autoFocus,
  rows
}: TextareaPropsType) {
  const [text, setText] = useState<string>(Symbols.Empty);
  const [isTextValid, setIsTextValid] = useState<boolean>(false);
  const [errorShouldBeShown, setErrorShouldBeShown] = useState<boolean>(false);
  const [errorMessage, setErrorMassage] = useState<string>(Symbols.Empty);

  if (!isTextValid && isFormTriedToSubmit && !errorShouldBeShown) {
    setErrorShouldBeShown(true);
    setErrorMassage(FORM_MESSAGES.TEXTAREA_EMPTY);
  };

  const validateText = (text: string) => text !== Symbols.Empty;

  const inputTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (errorShouldBeShown) setErrorShouldBeShown(false);
    if (errorMessage !== Symbols.Empty) setErrorMassage(Symbols.Empty);
    if (isFormTriedToSubmit) resetIsFormTriedToSubmit(false);

    const text = e.target.value;
    const isTextValid = validateText(text);

    setText(text);
    setIsTextValid(isTextValid);
    passTextValidStatusToParent(isTextValid);
  };

  const blurTextHandler = () => {
    passTextToParent(text);
  };

  return (
    <>
      <textarea
        className='textarea textarea-new-task'
        rows={rows}
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={text}
        onChange={inputTextHandler}
        onBlur={blurTextHandler}
        disabled={isFormDisabled}
       ></textarea>

      <InputErrorMessage message={errorMessage} />
    </>
  );
}

export default Textarea;
