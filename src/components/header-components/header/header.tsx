import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../const/router-const';
import HeaderUserBlock from '../header-user-block/header-user-block';

function Header() {
  return (
    <header>
      <div className="header-limiter">
        <div className="header-logo">
          <Link to={AppRoutes.Main} className='light-link header-logo-link'>DRM Team</Link>
        </div>
        
        <HeaderUserBlock />
      </div>
    </header>
  );
}

export default Header;
