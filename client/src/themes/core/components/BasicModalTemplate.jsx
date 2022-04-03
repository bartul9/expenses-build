import React from "react";
import { observer } from "mobx-react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const BasicModalTemplate = observer(({ store, className, children }) => {
  const { closeModal, title, description, isOpen, onSubmit } = store;

    return (
      <div>
        <Dialog open={isOpen} onClose={closeModal}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
                {description}
            </DialogContentText>
            {children}
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal}>Cancel</Button>
            <Button onClick={onSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
})

export default BasicModalTemplate;
