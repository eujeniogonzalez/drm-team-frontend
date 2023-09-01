import { Dispatch, FormEvent, SetStateAction } from 'react';
import { APIActions } from '../const/api-const';

export type InputEmailProps = {
  passEmailToParent: Dispatch<SetStateAction<string>>;
  passEmailValidStatusToParent: Dispatch<SetStateAction<boolean>>;
  isFormTriedToSubmit: boolean;
  resetIsFormTriedToSubmit: Dispatch<SetStateAction<boolean>>;
  isFormDisabled: boolean;
}

export type InputPasswordProps = {
  passPasswordToParent: Dispatch<SetStateAction<string>>;
  passPasswordValidStatusToParent: Dispatch<SetStateAction<boolean>>;
  isFormTriedToSubmit: boolean;
  autofocus?: boolean;
  resetIsFormTriedToSubmit: Dispatch<SetStateAction<boolean>>;
  passwordForMatching?: string;
  placeholder?: string;
  isFormDisabled: boolean;
}

export type SubmitButtonProps = {
  submitButtonClickHandler: (e: FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  isFormDisabled: boolean;
};
