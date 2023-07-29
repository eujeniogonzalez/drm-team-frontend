import './confirm-page.scss';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';

function ConfirmPage() {
  document.title = 'Confirm';
  return (
    <>
      <Header/>
      <Content>
        <p>Confirm Page</p>
      </Content>
      <Footer />
    </>
  );
}

export default ConfirmPage;