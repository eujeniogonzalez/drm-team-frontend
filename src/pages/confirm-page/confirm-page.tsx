import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import Loader from '../../components/loader/loader';
import { LoaderColors, LoaderSizes } from '../../const/loader-const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserAPIResponse } from '../../store/processes/user-process/user-selectors';
import { useParams } from 'react-router-dom';
import { confirmUserAction } from '../../store/api-actions';
import Message from '../../components/message/message';

function ConfirmPage() {
  document.title = 'Confirm';

  const { confirmID } = useParams();
  const userAPIResponse = useAppSelector(getUserAPIResponse);
  const dispatch = useAppDispatch();

  if (confirmID && !userAPIResponse.type) {
    dispatch(confirmUserAction({ confirmID }));
  }

  const getPageContent = () => {
    switch (true) {
      case userAPIResponse.body !== null:
        if (userAPIResponse.body !== null) {
          return <Message message={userAPIResponse.body.message} />;
        }

      default:
        return <Loader size={LoaderSizes.Large} color={LoaderColors.Grey} />;
    }
  };

  return (
    <>
      <Header/>
      <Content>
        {getPageContent()}
      </Content>
      <Footer />
    </>
  );
}

export default ConfirmPage;