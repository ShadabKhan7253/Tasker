import {
  Button,
  Checkbox,
  Chip,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import React from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export const TaskItem = ({ id, value, isCompleted, onToggle, onModalOpen }) => {
  const listItemTextStyle = isCompleted ? { textDecoration: 'line-through' } : {};

  let chipElement;
  if (isCompleted) {
    chipElement = <Chip label="Completed" variant="outlined" color="success" />;
  } else {
    chipElement = <Chip label="Pending" variant="outlined" color="warning" />;
  }

  const handleModalVisibility = (id) => {
    onModalOpen(id);
  };
  return (
    <div>
      <ListItem
        key={1}
        sx={{ paddingBottom: 2, paddingTop: 2, borderBottom: 'solid 1px #AAA' }}
        disablePadding
      >
        <Checkbox
          checked={isCompleted}
          onChange={() => onToggle(id)}
          inputProps={{ 'data-id': id }}
        />
        <ListItemText primary={value} style={listItemTextStyle} />
        <ListItemSecondaryAction>
          {chipElement}
          <Button
            variant="contained"
            color="error"
            sx={{ marginLeft: 5 }}
            onClick={() => handleModalVisibility(id)}
          >
            <DeleteForeverOutlinedIcon /> Delete
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};
