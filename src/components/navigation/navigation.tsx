import React from 'react';
import { AppRoutes } from '../../const/router-const';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div>
        <Link to={AppRoutes.Main} className='dark-link'>Main</Link>
      </div>
      <div>
        <Link to={AppRoutes.Login} className='dark-link'>Login</Link>
      </div>
    </nav>
  );
}

export default Navigation;