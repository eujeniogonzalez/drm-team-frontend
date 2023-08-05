import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { AuthStatuses } from '../../const/common-const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/processes/user-process/user-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
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
