import './not-found-page.scss';
import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const/router-const';

function NotFoundPage() {
  document.title = 'Not Found';
  return (
    <>
      <Header/>
      <Content>
        <div className="not-found-message">
          <p>
            Sorry, this page not exists
          </p>
          <p>
            <Link to={AppRoutes.Main} className='dark-link'>На главную</Link>
          </p>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default NotFoundPage;