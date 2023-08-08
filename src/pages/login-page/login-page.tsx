import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import LoginForm from '../../components/login-form/login-form';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/processes/user-process/user-selectors';
import { AuthStatuses } from '../../const/common-const';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';

function LoginPage() {
  document.title = 'Login';

  const authorizationStatus: AuthStatuses = useAppSelector(getAuthorizationStatus);

  const getPageContent = () => {
    switch (true) {
      case authorizationStatus === AuthStatuses.Auth:
        return <Navigate to={AppRoutes.Tasks}/>
    
      default:
        return <LoginForm />;
    }
  };

  return (
    <>
      <Header/>
      <Content>
        {getPageContent()}
      </Content>
      <Footer />
    </>
  );
}

export default LoginPage;