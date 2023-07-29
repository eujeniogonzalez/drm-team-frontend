import './new-password-page.scss';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';

function NewPasswordPage() {
  document.title = 'New Password';
  return (
    <>
      <Header/>
      <Content>
        <p>New Password Page</p>
      </Content>
      <Footer />
    </>
  );
}

export default NewPasswordPage;