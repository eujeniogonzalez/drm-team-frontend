import './header-logo.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../const/router-const';
import { useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/processes/user-process/user-selectors';
import { AuthStatuses } from '../../../const/common-const';

function HeaderLogo() {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const logoLink = authStatus === AuthStatuses.Auth ? AppRoutes.Tasks : AppRoutes.Main;

  return (
    <div className='header-logo'>
      <Link to={logoLink} className='light-link header-logo-link'>DRM Team</Link>
    </div>
  );
}

export default HeaderLogo;
