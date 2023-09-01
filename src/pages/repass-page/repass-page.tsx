import React, { useEffect } from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import RepassForm from '../../components/form-components/repass-form/repass-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getUserAPIResponse } from '../../store/processes/user-process/user-selectors';
import Message from '../../components/message/message';
import { AuthStatuses } from '../../const/common-const';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { META } from '../../const/meta-const';
import { APIActions } from '../../const/api-const';
import { resetUserAPIResponse } from '../../store/processes/user-process/user-process';

function RepassPage() {
  document.title = META.TITLE.REPASS;

  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const userAPIResponse = useAppSelector(getUserAPIResponse);
  
  useEffect(() =>{
    if (userAPIResponse.type && userAPIResponse.type !== APIActions.Repass) dispatch(resetUserAPIResponse());
  });
  
  const isRepassSuccess = () => {
    return userAPIResponse.body?.success && userAPIResponse.type === APIActions.Repass;
  };

  const getPageContent = () => {
    switch (true) {
      case authStatus === AuthStatuses.Auth:
        return <Navigate to={AppRoutes.Tasks} />;

      case isRepassSuccess():
        if (userAPIResponse.body) {
          return <Message message={userAPIResponse.body.message} />;
        }

      default:
        return <RepassForm />;
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

export default RepassPage;