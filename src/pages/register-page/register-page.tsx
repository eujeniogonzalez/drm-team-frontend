import React  from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import RegisterForm from '../../components/form-components/register-form/register-form';
import Message from '../../components/message/message';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getIsUserRequestSuccess } from '../../store/processes/user-process/user-selectors';
import { JSX_MESSAGES } from '../../const/messages-const';
import { AuthStatuses } from '../../const/common-const';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { META } from '../../const/meta-const';

function RegisterPage() {
  document.title = META.TITLE.REGISTER;

  const authStatus = useAppSelector(getAuthorizationStatus);
  const isUserRegistered = useAppSelector(getIsUserRequestSuccess);
  
  const getPageContent = () => {
    switch (true) {
      case authStatus === AuthStatuses.Auth:
        return <Navigate to={AppRoutes.Tasks} />;
    
      case isUserRegistered:
        return <Message message={JSX_MESSAGES.SUCCESS_REGISTER} />;

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
