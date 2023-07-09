import React from 'react';
import Form from "./Form";
import TaskList from './TasksList'
import Buttons from './Buttons';
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import Container from '../../../common/Container';
import Search from './Search';
import ExampleTasksButton from './Buttons/ExampleTaskButton';

function TasksPage() {
  
  return (
    <Container className="container">
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form/>}
        extraHeaderContent={<ExampleTasksButton/>}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList/>
        }
        extraHeaderContent={
          <Buttons/>
        }
      />
    </Container>
  );
}

export default TasksPage;