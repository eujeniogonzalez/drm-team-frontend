import './main-page.scss';
import React from 'react';
import Navigation from '../../components/navigation/navigation';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function MainPage() {
  document.title = 'Main';
  return (
    <>
      <Header/>
      <Navigation />
      <h1 className='main-test'>Main Page</h1>
      <Footer />
    </>
  );
}

export default MainPage;