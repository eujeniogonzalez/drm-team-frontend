import './login-page.scss';
import React from 'react';
import Navigation from '../../components/navigation/navigation';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';

function LoginPage() {
  document.title = 'Login';
  return (
    <>
      <Header/>
      <Content>
        <Navigation />
        <h1 className='login-test'>Login Page</h1>
      </Content>
      <Footer />
    </>
  );
}

export default LoginPage;