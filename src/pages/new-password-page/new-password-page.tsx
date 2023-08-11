import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import NewPasswordForm from '../../components/new-password-form/new-password-form';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getUserAPIResponse } from '../../store/processes/user-process/user-selectors';
import Message from '../../components/message/message';
import { AuthStatuses } from '../../const/common-const';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';

function NewPasswordPage() {
  document.title = 'New Password';
  
  const authStatus = useAppSelector(getAuthorizationStatus);
  const userAPIResponse = useAppSelector(getUserAPIResponse);
  
  const getPageContent = () => {
    switch (true) {
      case authStatus === AuthStatuses.Auth:
        return <Navigate to={AppRoutes.Tasks} />

      case userAPIResponse.body !== null:
        if (userAPIResponse.body !== null) {
          return <Message message={userAPIResponse.body.message} />;
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