import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { AuthStatuses } from '../../const/common-const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/processes/user-process/user-selectors';
import { PrivateRouteProps } from '../../types/private-route-props-types';

function PrivateRoute(props: PrivateRouteProps) {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const { children } = props;
  const navigate = useNavigate();
  
  useEffect(() => {
    if (authStatus !== AuthStatuses.Auth) {
      navigate(AppRoutes.Login);
    }
  }, [authStatus]);

  return children;
}

export default PrivateRoute;
