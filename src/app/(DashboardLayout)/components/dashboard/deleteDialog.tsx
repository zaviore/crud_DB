import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { _data, _dataDelete } from '@/_libs/redux/dataUsers';
import useDashboardService from './service/useDashboardAPI';

export default function DeleteDialog({open, handleClose, data}:any) {
   
const { handleDeleteUser } = useDashboardService()

  return (
    <React.Fragment>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent sx={{width:300}}>
          <DialogContentText id="alert-dialog-description" textAlign={"center"}>
           Delete this data?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose}>No</Button>
          <Button variant='contained' onClick={handleDeleteUser} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}