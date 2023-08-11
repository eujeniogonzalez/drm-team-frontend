import './tasks-page.scss';
import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';

function TasksPage() {
  document.title = 'Tasks';
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