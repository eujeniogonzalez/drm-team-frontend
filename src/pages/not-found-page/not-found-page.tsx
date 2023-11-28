import React from 'react';
import Header from '../../components/page-components/header/header';
import Footer from '../../components/page-components/footer/footer';
import Content from '../../components/page-components/content/content';
import Message from '../../components/page-components/message/message';
import { META } from '../../const/meta-const';
import { MESSAGES } from '../../const/messages-const';
import { useAppSelector } from '../../hooks';
import { getLanguageCode } from '../../store/processes/user-process/user-selectors';

function NotFoundPage() {
  document.title = META.TITLE.NOT_FOUND;

  const languageCode = useAppSelector(getLanguageCode);

  return (
    <>
      <Header />
      <Content>
        <Message message={MESSAGES.NOT_FOUND_PAGE[languageCode]} />
      </Content>
      <Footer />
    </>
  );
}

export default NotFoundPage;