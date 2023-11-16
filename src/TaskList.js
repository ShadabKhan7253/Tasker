import React from 'react';
import {
  Card,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Chip,
} from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const TaskList = () => {
  return (
    <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
      <Grid item xs={12}>
        <Card sx={{ padding: 1 }} raised="true">
          <List sx={{ padding: 1 }}>
            <ListItem
              key={1}
              sx={{ paddingBottom: 2, paddingTop: 2, borderBottom: 'solid 1px #AAA' }}
              disablePadding
            >
              <Checkbox checked="true" disabled />
              <ListItemText primary="Task 1" style={{ textDecoration: 'line-through' }} />

              <ListItemSecondaryAction>
                <Chip label="Completed" variant="outlined" color="success" />
                <Button variant="contained" color="error" sx={{ marginLeft: 5 }}>
                  <DeleteForeverOutlinedIcon /> Delete
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem
              key={2}
              disablePadding
              sx={{ paddingBottom: 2, paddingTop: 2, borderBottom: 'solid 1px #AAA' }}
            >
              <Checkbox />
              <ListItemText primary="Task 2" />

              <ListItemSecondaryAction>
                <Chip label="Pending" variant="outlined" color="warning" />
                <Button variant="contained" color="error" sx={{ marginLeft: 5 }}>
                  <DeleteForeverOutlinedIcon /> Delete
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TaskList;
