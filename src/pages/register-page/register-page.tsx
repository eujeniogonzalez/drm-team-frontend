import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import RegisterForm from '../../components/register-form/register-form';

function RegisterPage() {
  document.title = 'Register';

  return (
    <>
      <Header/>
      <Content>
        <RegisterForm />
      </Content>
      <Footer />
    </>
  );
}

export default RegisterPage;