import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <TaskForm />
        <TaskList />
      </Container>
    </div>
  );
};

export default App;
