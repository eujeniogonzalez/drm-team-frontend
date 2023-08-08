import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { AuthStatuses } from '../../const/common-const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/processes/user-process/user-selectors';
import { PrivateRouteProps } from '../../types/private-route-props';

function PrivateRoute(props: PrivateRouteProps) {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const { children } = props;

  switch (authStatus) {
    case AuthStatuses.Auth:
      return children;

    default:
      return <Navigate to={AppRoutes.Login} />;
  }
}

export default PrivateRoute;
