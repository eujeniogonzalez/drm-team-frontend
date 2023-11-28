import './main-page.scss';
import React from 'react';
import Header from '../../components/page-components/header/header';
import Footer from '../../components/page-components/footer/footer';
import Content from '../../components/page-components/content/content';
import { AppRoutes } from '../../const/router-const';
import { META } from '../../const/meta-const';
import LinksBlock from '../../components/page-components/links-block/links-block';
import { UI_NAMES } from '../../const/ui-const';
import { LinksBlockAlignment } from '../../const/common-const';
import { useAppSelector } from '../../hooks';
import { getLanguageCode } from '../../store/processes/user-process/user-selectors';

function MainPage() {
  document.title = META.TITLE.MAIN;

  const languageCode = useAppSelector(getLanguageCode);

  return (
    <>
      <Header />
      <Content>
        <div className='main-page-content'>
          <div className='main-page-title'>Это лендинг</div>

          <LinksBlock
            links={[
              {route: AppRoutes.Login, anchor: UI_NAMES.ENTER[languageCode]},
              {route: AppRoutes.Repass, anchor: UI_NAMES.RESTORE_PASSWORD[languageCode]},
              {route: AppRoutes.Register, anchor: UI_NAMES.REGISTER[languageCode]}
            ]}
            alignment={LinksBlockAlignment.Vertical}
          />
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default MainPage;