import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import Loader from '../../components/loader/loader';
import { LoaderColors, LoaderSizes } from '../../const/loader-const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getUserAPIResponse } from '../../store/processes/user-process/user-selectors';
import { Navigate, useParams } from 'react-router-dom';
import { confirmUserAction } from '../../store/api-actions';
import Message from '../../components/message/message';
import { AuthStatuses } from '../../const/common-const';
import { AppRoutes } from '../../const/router-const';
import { META } from '../../const/meta-const';
import { APIActions } from '../../const/api-const';

function ConfirmPage() {
  document.title = META.TITLE.CONFIRM;

  const { confirmID } = useParams();
  const userAPIResponse = useAppSelector(getUserAPIResponse);
  const authStatus = useAppSelector(getAuthorizationStatus)
  const dispatch = useAppDispatch();
  
  if (confirmID && userAPIResponse.type !== APIActions.Confirm) dispatch(confirmUserAction({ confirmID }));

  const getPageContent = () => {
    switch (true) {
      case authStatus === AuthStatuses.Auth:
        return <Navigate to={AppRoutes.Tasks} />

      case userAPIResponse.body && userAPIResponse.type === APIActions.Confirm:
        if (userAPIResponse.body) {
          return <Message message={userAPIResponse.body.message} />;
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