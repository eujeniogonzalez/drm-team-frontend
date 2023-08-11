import './tasks-page.scss';
import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import { META } from '../../const/meta-const';

function TasksPage() {
  document.title = META.TITLE.TASKS;

  return (
    <>
      <Header />
      <Content>
        <h1>Tasks Page</h1>
      </Content>
      <Footer />
    </>
  );
}

export default TasksPage;