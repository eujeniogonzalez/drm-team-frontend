import './repass-form.scss';
import React, { FormEvent, useEffect, useState } from 'react';
import { AppRoutes } from '../../../../const/router-const';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { LinksBlockAlignment, Symbols } from '../../../../const/common-const';
import { repassUserAction } from '../../../../store/api-actions/user-api-actions';
import InputEmail from '../../form-elements/input-email/input-email';
import SubmitButton from '../../form-elements/submit-button/submit-button';
import { UI_NAMES } from '../../../../const/ui-const';
import LinksBlock from '../../../links-block/links-block';
import { APIActions } from '../../../../const/api-const';
import { showToast } from '../../../../store/processes/toast-process/toast-process';
import { resetUserAPIResponse } from '../../../../store/processes/user-process/user-process';

import {
  getIsUserRequestInProgress,
  getLanguageCode,
  getUserAPIResponse
} from '../../../../store/processes/user-process/user-selectors';

function RepassForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>(Symbols.Empty);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isFormTriedToSubmit, setIsFormTriedToSubmit] = useState<boolean>(false);

  const languageCode = useAppSelector(getLanguageCode);
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

    setIsFormTriedToSubmit(true);

    if (!isEmailValid) {
      dispatch(resetUserAPIResponse());
      return;
    }

    dispatch(repassUserAction({ email }));
  };
  
  return (
    <div className='repass-form-wrapper'>
      <div className='repass-form-content'>
        <div className='repass-form-title'>{UI_NAMES.RESTORE_PASSWORD[languageCode]}</div>

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
            buttonText={UI_NAMES.RESTORE[languageCode]}
            isFormDisabled={isFormDisabled}
          />
        </form>
        
        <LinksBlock
          links={[
            {route: AppRoutes.Login, anchor: UI_NAMES.ENTER[languageCode]},
            {route: AppRoutes.Register, anchor: UI_NAMES.REGISTRATION[languageCode]}
          ]}
          alignment={LinksBlockAlignment.Horizontal}
        />
      </div>
    </div>
  );
}

export default RepassForm;