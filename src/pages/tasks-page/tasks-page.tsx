import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import { META } from '../../const/meta-const';
import NewTaskButton from '../../components/tasks-components/create-task-button/create-task-button';
import Wrapper from '../../components/wrapper/wrapper';
import TaskList from '../../components/tasks-components/task-list/task-list';

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