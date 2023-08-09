import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import RepassForm from '../../components/repass-form/repass-form';
import { useAppSelector } from '../../hooks';
import { getUserAPIResponse } from '../../store/processes/user-process/user-selectors';
import Message from '../../components/message/message';

function RepassPage() {
  document.title = 'Repass';

  const userAPIResponse = useAppSelector(getUserAPIResponse);

  const getPageContent = () => {
    switch (true) {
      case userAPIResponse.body !== null:
        if (userAPIResponse.body !== null) {
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