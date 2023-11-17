import React, { useRef, useState } from 'react';
import { Container } from '@mui/material';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

const App = () => {
  const initialTasks = [
    {
      id: 1,
      value: 'Practice React',
      isCompleted: false,
    },
    {
      id: 2,
      value: 'Practice Ds',
      isCompleted: true,
    },
    {
      id: 3,
      value: 'Practice Js',
      isCompleted: false,
    },
  ];

  const taskRef = useRef('');
  // const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState(initialTasks);

  // const handleTaskInputChange = (evt) => {
  //   setTaskInput(evt.target.value);
  // };
  const handleTaskInputCLear = () => {
    taskRef.current.value = '';
  };
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const randomId = Math.ceil(Math.random() * 40000);
    setTasks([...tasks, { id: randomId, value: taskRef.current.value, isCompleted: false }]);
    taskRef.current.value = '';
  };

  // const handleToggle = (evt) => {
  //     const taskId = Number(evt.target.dataset.id);

  //     setTasks(
  //         tasks.map(task => task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task)
  //     );
  // }

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task))
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <TaskForm
          taskRef={taskRef}
          // taskInput={taskInput}
          // onTaskInputChange={handleTaskInputChange}
          onClear={handleTaskInputCLear}
          onFormSubmit={handleFormSubmit}
        />
        <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
      </Container>
    </div>
  );
};

export default App;
