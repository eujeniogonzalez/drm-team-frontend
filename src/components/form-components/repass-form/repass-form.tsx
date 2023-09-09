import './repass-form.scss';
import React, { FormEvent, useEffect, useState } from 'react';
import { AppRoutes } from '../../../const/router-const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { LinksBlockAlignment, Symbols } from '../../../const/common-const';
import { repassUserAction } from '../../../store/api-actions';
import InputEmail from '../input-email/input-email';
import SubmitButton from '../submit-button/submit-button';
import { UI_NAMES } from '../../../const/ui-const';
import LinksBlock from '../../links-block/links-block';
import { APIActions } from '../../../const/api-const';
import { getIsUserRequestInProgress, getUserAPIResponse } from '../../../store/processes/user-process/user-selectors';
import { showToast } from '../../../store/processes/toast-process/toast-process';

function RepassForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>(Symbols.Empty);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isFormTriedToSubmit, setIsFormTriedToSubmit] = useState<boolean>(false);

  const isUserRequestInProgress = useAppSelector(getIsUserRequestInProgress);
  const APIResponse = useAppSelector(getUserAPIResponse);
  const isFormDisabled = isUserRequestInProgress && APIResponse.type === APIActions.Repass;
  const isToastShouldBeShown = (
    !APIResponse.body?.success &&
    APIResponse.type === APIActions.Repass &&
    APIResponse.body?.message &&
    isFormTriedToSubmit
  );

  useEffect(() => {
    if (isToastShouldBeShown) dispatch(showToast(APIResponse.body?.message));
  });
  
  const submitRepassFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailValid) return;

    setIsFormTriedToSubmit(true);

    dispatch(repassUserAction({ email }));
  };
  
  return (
    <div className='repass-form-content'>
      <div className='repass-form-title'>{UI_NAMES.REMEMBER_PASSWORD}</div>

      <form onSubmit={submitRepassFormHandler}>
        <InputEmail
          passEmailToParent={setEmail}
          passEmailValidStatusToParent={setIsEmailValid}
          isFormTriedToSubmit={isFormTriedToSubmit}
          resetIsFormTriedToSubmit={setIsFormTriedToSubmit}
          isFormDisabled={isFormDisabled}
        />

        <SubmitButton
          submitButtonClickHandler={submitRepassFormHandler}
          buttonText={UI_NAMES.REMEMBER}
          isFormDisabled={isFormDisabled}
        />
      </form>
      
      <LinksBlock
        links={[
          {route: AppRoutes.Login, anchor: UI_NAMES.ENTER},
          {route: AppRoutes.Register, anchor: UI_NAMES.REGISTRATION}
        ]}
        alignment={LinksBlockAlignment.Horizontal}
      />
    </div>
  );
}

export default RepassForm;