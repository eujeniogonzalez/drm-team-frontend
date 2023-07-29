import './register-page.scss';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';

function RegisterPage() {
  document.title = 'Register';
  return (
    <>
      <Header/>
      <Content>
        <div className="register-page-content">
          <div className="register-page-title">Регистрация</div>
          
          <input className="input register-page-input-login" type="text" placeholder="E-mail" autoFocus />
          <input className="input register-page-input-password" type="password" placeholder="Придумайте пароль" />
          <input className="input register-page-repeat-password" type="password" placeholder="Повторите пароль" />
          <input className="submit register-page-submit-button" type="submit" value="Зарегистрироваться" />

          <div className="register-page-links">
            <Link className="dark-link register-page-links-item" to={AppRoutes.Login}>Войти</Link>
            <Link className="dark-link register-page-links-item" to={AppRoutes.Repass}>Вспомнить пароль</Link>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default RegisterPage;