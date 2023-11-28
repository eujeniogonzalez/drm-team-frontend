import React from 'react';
import Header from '../../components/page-components/header/header';
import Footer from '../../components/page-components/footer/footer';
import Content from '../../components/page-components/content/content';
import LoginForm from '../../components/form-components/login-form/login-form';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/processes/user-process/user-selectors';
import { AuthStatuses } from '../../const/common-const';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { META } from '../../const/meta-const';

function LoginPage() {
  document.title = META.TITLE.LOGIN;

  const authStatus = useAppSelector(getAuthorizationStatus);

  const getPageContent = () => {
    switch (true) {
      case authStatus === AuthStatuses.Auth:
        return <Navigate to={AppRoutes.Tasks} />
    
      default:
        return <LoginForm />;
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

export default LoginPage;