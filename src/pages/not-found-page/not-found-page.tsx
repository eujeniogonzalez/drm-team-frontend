import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import Message from '../../components/message/message';
import { META } from '../../const/meta-const';
import { MESSAGES } from '../../const/messages-const';

function NotFoundPage() {
  document.title = META.TITLE.NOT_FOUND;

  return (
    <>
      <Header />
      <Content>
        <Message message={MESSAGES.NOT_FOUND_PAGE} />
      </Content>
      <Footer />
    </>
  );
}

export default NotFoundPage;