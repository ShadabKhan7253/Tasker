import { Button, Card, Grid, TextField } from '@mui/material';
import React from 'react';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export const TaskForm = ({ taskRef, onClear, onFormSubmit }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Card sx={{ padding: 4 }} raised="true">
          <form onSubmit={onFormSubmit}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={8}>
                <TextField
                  id="task-input"
                  label="Insert your task"
                  inputRef={taskRef}
                  // value={taskInput}
                  // onChange={onTaskInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="primary" fullWidth onClick={onFormSubmit}>
                  <DataSaverOnOutlinedIcon /> Submit
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="secondary" onClick={onClear} fullWidth>
                  <DeleteOutlinedIcon /> Clear
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};
