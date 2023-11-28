import React from 'react';
import Header from '../../components/page-components/header/header';
import Footer from '../../components/page-components/footer/footer';
import Content from '../../components/page-components/content/content';
import { META } from '../../const/meta-const';
import NewTaskButton from '../../components/task-components/create-task-button/create-task-button';
import Wrapper from '../../components/page-components/wrapper/wrapper';
import TaskList from '../../components/task-components/task-list/task-list';

function TasksPage() {
  document.title = META.TITLE.TASKS;
  
  return (
    <>
      <Header />
      <Content>
        <Wrapper minHeight={30}>
          <NewTaskButton />
        </Wrapper>

        <TaskList />
      </Content>
      <Footer />
    </>
  );
}

export default TasksPage;