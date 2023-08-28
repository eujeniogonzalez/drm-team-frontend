import React  from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import RegisterForm from '../../components/form-components/register-form/register-form';
import Message from '../../components/message/message';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getUserAPIResponse } from '../../store/processes/user-process/user-selectors';
import { AuthStatuses } from '../../const/common-const';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { META } from '../../const/meta-const';
import { APIActions } from '../../const/api-const';

function RegisterPage() {
  document.title = META.TITLE.REGISTER;

  const authStatus = useAppSelector(getAuthorizationStatus);
  const userAPIResponse = useAppSelector(getUserAPIResponse);
  
  const getPageContent = () => {
    switch (true) {
      case authStatus === AuthStatuses.Auth:
        return <Navigate to={AppRoutes.Tasks} />;
    
      case userAPIResponse.body && userAPIResponse.type === APIActions.Register:
        if (userAPIResponse.body) {
          return <Message message={userAPIResponse.body.message} />;
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
