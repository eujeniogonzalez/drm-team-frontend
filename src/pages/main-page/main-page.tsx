import './main-page.scss';
import React from 'react';
import Navigation from '../../components/navigation/navigation';
import Header from '../../components/header/header';

function MainPage() {
  return (
    <>
      <Header/>
      <Navigation />
      <h1 className='main-test'>Main Page</h1>
    </>
  );
}

export default MainPage;