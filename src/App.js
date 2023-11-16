import React from 'react';
import {
  Card,
  TextField,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Chip,
} from '@mui/material';
import Header from './components/Header';
import DataSaverOnOutlinedIcon from '@mui/icons-material/DataSaverOnOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Card sx={{ padding: 4 }} raised="true">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                  <TextField id="task-input" label="Insert your task" fullWidth />
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained" color="primary" fullWidth>
                    <DataSaverOnOutlinedIcon /> Submit
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained" color="secondary" fullWidth>
                    <DeleteOutlinedIcon /> Clear
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
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
      </Container>
    </div>
  );
};

export default App;
