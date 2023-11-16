import React, { useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [taskInput, setTaskInput] = useState('');

  const handleTaskInputChange = (evt) => {
    setTaskInput(evt.target.value);
  };

  const handleTaskInputClear = () => {
    setTaskInput('');
  };

  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <TaskForm
          taskInput={taskInput}
          onTaskInputChnage={handleTaskInputChange}
          onClear={handleTaskInputClear}
        />
        <TaskList />
      </Container>
    </div>
  );
};

export default App;
