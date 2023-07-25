import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';

function Header() {
  return (
    <header>
      <div className="header-limiter">
        <div className="header-logo">
          <Link to={AppRoutes.Main} className='light-link header-logo-link'>DRM Team</Link>
        </div>
        <div className="header-user-block">
          <Link to={AppRoutes.Login} className='light-link header-login-link'>Войти</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;