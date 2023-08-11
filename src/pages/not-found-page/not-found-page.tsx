import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import Message from '../../components/message/message';

function NotFoundPage() {
  document.title = 'Not Found';

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