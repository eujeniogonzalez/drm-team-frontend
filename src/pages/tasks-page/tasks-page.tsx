import './tasks-page.scss';
import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import { META } from '../../const/meta-const';
import NewTaskButton from '../../components/tasks-components/new-task-button/new-task-button';

function TasksPage() {
  document.title = META.TITLE.TASKS;

  return (
    <>
      <Header />
      <Content>
        <div className='buttons'>
          <NewTaskButton />
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default TasksPage;