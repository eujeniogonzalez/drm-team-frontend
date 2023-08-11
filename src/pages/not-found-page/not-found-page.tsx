import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import Message from '../../components/message/message';
import { META } from '../../const/meta-const';

function NotFoundPage() {
  document.title = META.TITLE.NOT_FOUND;

  return (
    <>
      <Header />
      <Content>
        <Message message={'Такой страницы не существует'} />
      </Content>
      <Footer />
    </>
  );
}

export default NotFoundPage;