import './header.scss';
import React from 'react';
import HeaderUserBlock from '../header-user-block/header-user-block';
import HeaderLogo from '../header-logo/header-logo';

function Header() {
  return (
    <header>
      <div className='header-limiter'>
        <HeaderLogo />
        <HeaderUserBlock />
      </div>
    </header>
  );
}

export default Header;
