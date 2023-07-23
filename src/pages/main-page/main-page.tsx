import './main-page.scss';
import React from 'react';
import Navigation from '../../components/navigation/navigation';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';

function MainPage() {
  document.title = 'Main';
  return (
    <>
      <Header/>
      <Content>
        <Navigation />
        <h1 className='main-test'>Main Page</h1>
      </Content>
      <Footer />
    </>
  );
}

export default MainPage;