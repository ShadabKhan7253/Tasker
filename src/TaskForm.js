import React from 'react';
import { Card, TextField, Button, Grid } from '@mui/material';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const TaskForm = ({ taskInput, onTaskInputChnage, onClear }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Card sx={{ padding: 4 }} raised="true">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <TextField
                id="task-input"
                value={taskInput}
                label="Insert your task"
                fullWidth
                onChange={onTaskInputChnage}
              />
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="primary" fullWidth>
                <DataSaverOnOutlinedIcon /> Submit
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="secondary" fullWidth onClick={onClear}>
                <DeleteOutlinedIcon /> Clear
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TaskForm;
