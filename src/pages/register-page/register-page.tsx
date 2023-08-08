import React  from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import RegisterForm from '../../components/register-form/register-form';
import Message from '../../components/message/message';
import { useAppSelector } from '../../hooks';
import { getIsUserRegistered } from '../../store/processes/user-process/user-selectors';
import { JSX_MESSAGES } from '../../const/messages-const';

function RegisterPage() {
  document.title = 'Register';

  const isUserRegistered = useAppSelector(getIsUserRegistered);
  
  const getPageContent = () => {
    return isUserRegistered ? <Message message={JSX_MESSAGES.SUCCESS_REGISTER} /> : <RegisterForm />;
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

export default RegisterPage;
