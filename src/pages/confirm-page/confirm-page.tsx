import React, { useEffect } from 'react';
import Header from '../../components/page-components/header/header';
import Footer from '../../components/page-components/footer/footer';
import Content from '../../components/page-components/content/content';
import Loader from '../../components/page-components/loader/loader';
import { LoaderColors, LoaderSizes } from '../../const/classnames-const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Navigate, useParams } from 'react-router-dom';
import { confirmUserAction } from '../../store/api-actions/user-api-actions';
import Message from '../../components/page-components/message/message';
import { AuthStatuses } from '../../const/common-const';
import { AppRoutes } from '../../const/router-const';
import { META } from '../../const/meta-const';
import { APIActions } from '../../const/api-const';
import { UI_NAMES } from '../../const/ui-const';

import {
  getAuthorizationStatus,
  getLanguageCode,
  getUserAPIResponse
} from '../../store/processes/user-process/user-selectors';

function ConfirmPage() {
  document.title = META.TITLE.CONFIRM;

  const languageCode = useAppSelector(getLanguageCode);
  const { confirmID } = useParams();
  const userAPIResponse = useAppSelector(getUserAPIResponse);
  const authStatus = useAppSelector(getAuthorizationStatus)
  const dispatch = useAppDispatch();

  useEffect(() =>{
    if (confirmID && userAPIResponse.type !== APIActions.Confirm && userAPIResponse.type !== APIActions.Refresh) {
      dispatch(confirmUserAction({ confirmID }));
    };
  });

  const getLinksList = () => {
    switch (userAPIResponse.body?.success) {
      case true:
        return [
          {route: AppRoutes.Login, anchor: UI_NAMES.ENTER[languageCode]}
        ];
    
      case false:
        return [
          {route: AppRoutes.Main, anchor: UI_NAMES.MAIN[languageCode]}
        ];
    }
  };

  const getPageContent = () => {
    switch (true) {
      case authStatus === AuthStatuses.Auth:
        return <Navigate to={AppRoutes.Tasks} />

      case userAPIResponse.body && userAPIResponse.type === APIActions.Confirm:
        if (userAPIResponse.body) {
          return (
            <Message
              message={userAPIResponse.body.message}
              links={getLinksList()}
            />
          );
        }

      default:
        return <Loader size={LoaderSizes.Large} color={LoaderColors.Grey} />;
    }
  };

  return (
    <>
      <Header />
      <Content>
        {getPageContent()}
      </Content>
      <Footer />
    </>
  );
}

export default ConfirmPage;