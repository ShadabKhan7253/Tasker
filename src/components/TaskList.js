import { Card, Grid, List } from '@mui/material';
import React, { useState } from 'react';
import { TaskItem } from './TaskItem';
import { DeleteModal } from './DeleteModal';

export const TaskList = ({ tasks, onToggle, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [taskIdToBeDeleted, setTaskIdToBeDeleted] = useState(-1);

  const handleOpen = (id) => {
    setOpen(true);
    setTaskIdToBeDeleted(id);
  };
  const handleClose = () => {
    setOpen(false);
    setTaskIdToBeDeleted(-1);
  };

  const handleDelete = () => {
    setOpen(false);
    onDelete(taskIdToBeDeleted);
    setTaskIdToBeDeleted(-1);
  };
  return (
    <>
      <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
        <Grid item xs={12}>
          <Card sx={{ padding: 1 }} raised="true">
            <List sx={{ padding: 1 }}>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  value={task.value}
                  isCompleted={task.isCompleted}
                  onToggle={onToggle}
                  onModalOpen={handleOpen}
                />
              ))}
            </List>
          </Card>
        </Grid>
      </Grid>
      <DeleteModal
        open={open}
        onModalClose={handleClose}
        taskId={taskIdToBeDeleted}
        onAccept={handleDelete}
      />
    </>
  );
};
