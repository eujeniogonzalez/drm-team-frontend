import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { AuthStatuses } from '../../const/common-const';
import { useAppSelector } from '../../hooks';
import { PrivateRouteProps } from '../../types/private-route-props-types';

import {
  getAuthorizationStatus,
  getIsUserRequestInProgress
} from '../../store/processes/user-process/user-selectors';
import React from 'react';
import Header from '../header-components/header/header';
import Footer from '../footer/footer';
import Content from '../content/content';
import Loader from '../loader/loader';
import { LoaderColors, LoaderSizes } from '../../const/loader-const';

function PrivateRoute(props: PrivateRouteProps) {
  const { children } = props;
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isUserRequestInProgress = useAppSelector(getIsUserRequestInProgress);
  
  const loadingPage = (
    <>
      <Header />
      <Content>
        <Loader size={LoaderSizes.Large} color={LoaderColors.Grey} />
      </Content>
      <Footer />
    </>
  );

  useEffect(() => {
    if (authStatus !== AuthStatuses.Auth && !isUserRequestInProgress) {
      navigate(AppRoutes.Login);
    }
  }, [authStatus]);

  return authStatus === AuthStatuses.Auth ? children : loadingPage;
}

export default PrivateRoute;
