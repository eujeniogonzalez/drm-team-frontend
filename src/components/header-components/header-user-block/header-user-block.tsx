import './header-user-block.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../const/router-const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AuthStatuses } from '../../../const/common-const';
import { logoutUserAction } from '../../../store/api-actions';

import {
  getAuthorizationStatus,
  getIsUserRequestInProgress
} from '../../../store/processes/user-process/user-selectors';

function HeaderUserBlock() {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isLogoutInProgress = useAppSelector(getIsUserRequestInProgress);

  const logoutLinkAnchor = isLogoutInProgress ? 'Выхожу...' : 'Выйти';
  
  const authLinkClickHandler = () => {
    dispatch(logoutUserAction());
  };

  const getAuthLink = () => {
    switch (authStatus) {
      case AuthStatuses.Auth:
        return <span className="light-link" onClick={authLinkClickHandler}>{logoutLinkAnchor}</span>;
    
      default:
        return <Link to={AppRoutes.Login} className='light-link header-login-link'>Войти</Link>;
    }
  };

  return (
    <div className="header-user-block">
      {getAuthLink()}
    </div>
  );
}

export default HeaderUserBlock;

