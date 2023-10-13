import React from 'react';
import Header from '../../components/header-components/header/header';
import Footer from '../../components/footer/footer';
import Content from '../../components/content/content';
import { META } from '../../const/meta-const';
import NewTaskButton from '../../components/tasks-components/new-task-button/new-task-button';
import ButtonsBlock from '../../components/buttons-block/buttons-block';

function TasksPage() {
  document.title = META.TITLE.TASKS;

  return (
    <>
      <Header />
      <Content>
        <ButtonsBlock>
          <NewTaskButton />
        </ButtonsBlock>
      </Content>
      <Footer />
    </>
  );
}

export default TasksPage;