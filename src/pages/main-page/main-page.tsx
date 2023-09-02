import './main-page.scss';
import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { META } from '../../const/meta-const';
import LinksBlock from '../../components/links-block/links-block';
import { UI_NAMES } from '../../const/ui-const';
import { LinksBlockAlignment } from '../../const/common-const';

function MainPage() {
  document.title = META.TITLE.MAIN;

  return (
    <>
      <Header />
      <Content>
        <div className='main-page-content'>
          <div className='main-page-title'>Это лендинг</div>

          <LinksBlock
            links={[
              {route: AppRoutes.Login, anchor: UI_NAMES.ENTER},
              {route: AppRoutes.Repass, anchor: UI_NAMES.REMEMBER_PASSWORD},
              {route: AppRoutes.Register, anchor: UI_NAMES.REGISTER}
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