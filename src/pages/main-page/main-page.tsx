import './main-page.scss';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';

function MainPage() {
  document.title = 'Main';
  return (
    <>
      <Header/>
      <Content>
        <div className="main-page-content">
          <div className="main-page-title">Здесь лендинг</div>

          <div className="main-page-navigation">
            <div className="navigation-item">
              <Link to={AppRoutes.Login} className='dark-link'>Войти</Link>
            </div>
            <div className="navigation-item">
              <Link to={AppRoutes.Repass} className='dark-link'>Вспомнить пароль</Link>
            </div>
            <div className="navigation-item">
              <Link to={AppRoutes.Register} className='dark-link'>Зарегистрироваться</Link>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default MainPage;