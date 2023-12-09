import './main-page.scss';
import React from 'react';
import Header from '../../components/page-components/header/header';
import Footer from '../../components/page-components/footer/footer';
import Content from '../../components/page-components/content/content';
import { META } from '../../const/meta-const';
import { useAppSelector } from '../../hooks';
import { getLanguageCode } from '../../store/processes/user-process/user-selectors';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';
import { UI_NAMES } from '../../const/ui-const';
import { CONTENT } from '../../const/content-const';

function MainPage() {
  document.title = META.TITLE.MAIN;

  const languageCode = useAppSelector(getLanguageCode);

  return (
    <>
      <Header />
      <Content>
        <div className='offer'>
          <div className='offer-title'>
            {CONTENT.OFFER_TITLE[languageCode]}
          </div>

          <div className='offer-description'>
            <p>{CONTENT.OFFER_DESCRIPTION_1[languageCode]}</p>
            <p>{CONTENT.OFFER_DESCRIPTION_2[languageCode]}</p>
          </div>

          <div className='offer-button'>
            <Link to={AppRoutes.Register} className='button link-button button-main-color'>
              {UI_NAMES.REGISTER[languageCode]}
            </Link>
          </div>
          
          <div className='offer-image'>
            <img src='/images/offer-image.jpg' />
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default MainPage;