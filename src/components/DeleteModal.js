import { style } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';

export const DeleteModal = ({ open, onModalClose, onAccept }) => {
  const Style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you Sure?
          </Typography>
          <Box>
            <Button sx={{ marginRight: '10px' }} onClick={onAccept}>
              Yes
            </Button>
            <Button onClick={onModalClose}>No</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
