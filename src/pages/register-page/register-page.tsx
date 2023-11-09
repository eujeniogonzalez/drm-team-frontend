import React, { useEffect }  from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import RegisterForm from '../../components/forms/form-components/register-form/register-form';
import Message from '../../components/message/message';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthStatuses } from '../../const/common-const';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { META } from '../../const/meta-const';
import { APIActions } from '../../const/api-const';
import { resetUserAPIResponse } from '../../store/processes/user-process/user-process';
import { UI_NAMES } from '../../const/ui-const';

import {
  getAuthorizationStatus,
  getLanguageCode,
  getUserAPIResponse
} from '../../store/processes/user-process/user-selectors';

function RegisterPage() {
  document.title = META.TITLE.REGISTER;

  const dispatch = useAppDispatch();
  const languageCode = useAppSelector(getLanguageCode);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const userAPIResponse = useAppSelector(getUserAPIResponse);

  useEffect(() =>{
    if (userAPIResponse.type && userAPIResponse.type !== APIActions.Register) dispatch(resetUserAPIResponse());
  });
  
  const isRegisterSuccess = () => {
    return userAPIResponse.body?.success && userAPIResponse.type === APIActions.Register;
  };

  const getPageContent = () => {
    switch (true) {
      case authStatus === AuthStatuses.Auth:
        return <Navigate to={AppRoutes.Tasks} />;
    
      case isRegisterSuccess():
        if (userAPIResponse.body) {
          return (
            <Message
              message={userAPIResponse.body.message}
              links={[
                {route: AppRoutes.Main, anchor: UI_NAMES.MAIN[languageCode]}
              ]}
            />
          );
        }

      default:
        return <RegisterForm />;
    }
  };

  return (
    <>
      <Header />
      <Content>
        {getPageContent()}
      </Content>
      <Footer />
    </>
  );
}

export default RegisterPage;
