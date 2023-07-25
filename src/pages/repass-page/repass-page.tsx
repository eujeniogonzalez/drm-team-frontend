import './repass-page.scss';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';

function RepassPage() {
  document.title = 'Repass';
  return (
    <>
      <Header/>
      <Content>
        <h1 className='repass-test'>Repass Page</h1>
      </Content>
      <Footer />
    </>
  );
}

export default RepassPage;