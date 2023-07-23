import './login-page.scss';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';

function LoginPage() {
  document.title = 'Login';
  return (
    <>
      <Header/>
      <Content>
        <h1 className='login-test'>Login Page</h1>
      </Content>
      <Footer />
    </>
  );
}

export default LoginPage;