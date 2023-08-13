import { Dispatch, FormEvent, SetStateAction } from 'react';

export type InputEmailProps = {
  passEmailToParent: Dispatch<SetStateAction<string>>;
  passEmailValidStatusToParent: Dispatch<SetStateAction<boolean>>;
  isFormTriedToSubmit: boolean;
  resetIsFormTriedToSubmit: Dispatch<SetStateAction<boolean>>;
}

export type InputPasswordProps = {
  passPasswordToParent: Dispatch<SetStateAction<string>>;
  passPasswordValidStatusToParent: Dispatch<SetStateAction<boolean>>;
  isFormTriedToSubmit: boolean;
  resetIsFormTriedToSubmit: Dispatch<SetStateAction<boolean>>;
}

export type SubmitButtonProps = {
  submitButtonClickHandler: (e: FormEvent<HTMLFormElement>) => void
};
