import './register-page.scss';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';

function RegisterPage() {
  document.title = 'Register';
  return (
    <>
      <Header/>
      <Content>
        <h1 className='register-test'>Register Page</h1>
      </Content>
      <Footer />
    </>
  );
}

export default RegisterPage;