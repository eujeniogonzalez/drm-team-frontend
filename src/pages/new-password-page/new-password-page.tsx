import React, { useEffect } from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import NewPasswordForm from '../../components/forms/form-components/new-password-form/new-password-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getUserAPIResponse } from '../../store/processes/user-process/user-selectors';
import Message from '../../components/message/message';
import { AuthStatuses } from '../../const/common-const';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { META } from '../../const/meta-const';
import { APIActions } from '../../const/api-const';
import { resetUserAPIResponse } from '../../store/processes/user-process/user-process';
import { UI_NAMES } from '../../const/ui-const';

function NewPasswordPage() {
  document.title = META.TITLE.NEW_PASSWORD;
  
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const userAPIResponse = useAppSelector(getUserAPIResponse);
  
  useEffect(() =>{
    if (userAPIResponse.type && userAPIResponse.type !== APIActions.NewPassword) dispatch(resetUserAPIResponse());
  });
  
  const isNewPasswordSuccess = () => {
    return userAPIResponse.body?.success && userAPIResponse.type === APIActions.NewPassword;
  };

  const getPageContent = () => {
    switch (true) {
      case authStatus === AuthStatuses.Auth:
        return <Navigate to={AppRoutes.Tasks} />

      case isNewPasswordSuccess():
        if (userAPIResponse.body) {
          return (
            <Message
              message={userAPIResponse.body.message}
              links={[
                {route: AppRoutes.Login, anchor: UI_NAMES.ENTER}
              ]}
            />
          );
        }

      default:
        return <NewPasswordForm />;
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

export default NewPasswordPage;