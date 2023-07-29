import './login-page.scss';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';

function LoginPage() {
  document.title = 'Login';
  return (
    <>
      <Header/>
      <Content>
        <div className="login-page-content">
          <div className="login-page-title">Вход</div>
          
          <input className="input login-page-input-login" type="text" placeholder="E-mail" autoFocus />
          <input className="input login-page-input-password" type="password" placeholder="Пароль" />
          <input className="submit login-page-submit-button" type="submit" value="Войти" />

          <div className="login-page-links">
            <Link className="dark-link login-page-links-item" to={AppRoutes.Repass}>Вспомнить пароль</Link>
            <Link className="dark-link login-page-links-item" to={AppRoutes.Register}>Регистрация</Link>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default LoginPage;