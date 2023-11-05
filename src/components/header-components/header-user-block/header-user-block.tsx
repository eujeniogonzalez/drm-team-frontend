import './header-user-block.scss';
import React from 'react';
import Loader from '../../loader/loader';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../const/router-const';
import { AuthStatuses } from '../../../const/common-const';
import { logoutUserAction } from '../../../store/api-actions/user-api-actions';
import { LoaderColors, LoaderSizes } from '../../../const/classnames-const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { UI_NAMES } from '../../../const/ui-const';

import {
  getAuthorizationStatus,
  getIsUserRequestInProgress
} from '../../../store/processes/user-process/user-selectors';

function HeaderUserBlock() {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isLogoutInProgress = useAppSelector(getIsUserRequestInProgress);

  const logoutLinkAnchor = isLogoutInProgress ? <Loader size={LoaderSizes.Micro} color={LoaderColors.White} /> : UI_NAMES.GO_OUT;
  
  const authLinkClickHandler = () => {
    dispatch(logoutUserAction());
  };

  const getAuthLink = () => {
    switch (authStatus) {
      case AuthStatuses.Auth:
        return <span className='light-link header-logout-link' onClick={authLinkClickHandler}>{logoutLinkAnchor}</span>;
    
      default:
        return <Link to={AppRoutes.Login} className='light-link header-login-link'>{UI_NAMES.ENTER}</Link>;
    }
  };

  return (
    <div className='header-user-block'>
      {getAuthLink()}
    </div>
  );
}

export default HeaderUserBlock;

