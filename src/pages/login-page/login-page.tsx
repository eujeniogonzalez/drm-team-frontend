import './login-page.scss';
import React from 'react';
import Navigation from '../../components/navigation/navigation';
import Header from '../../components/header/header';

function LoginPage() {
  return (
    <>
      <Header/>
      <Navigation />
      <h1 className='login-test'>Login Page</h1>
    </>
  );
}

export default LoginPage;