import './repass-page.scss';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';

function RepassPage() {
  document.title = 'Repass';
  return (
    <>
      <Header/>
      <Content>
        <div className="repass-page-content">
          <div className="repass-page-title">Вспомнить пароль</div>
          
          <input className="input repass-page-input-login" type="text" placeholder="E-mail" autoFocus />
          <input className="submit repass-page-submit-button" type="submit" value="Вспомнить" />

          <div className="repass-page-links">
            <Link className="dark-link repass-page-links-item" to={AppRoutes.Login}>Войти</Link>
            <Link className="dark-link repass-page-links-item" to={AppRoutes.Register}>Регистрация</Link>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default RepassPage;