import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDeleteUsersMutation } from '@/_libs/redux/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { _dataDelete, onFinishAlert, onOpenDeleteModal } from '@/_libs/redux/dataUsers';

export default function DeleteDialog({open, handleClose, data}:any) {
    const  [deleteUsers] = useDeleteUsersMutation();
    const dispatch = useDispatch()
    
    const handleDelete = async (e:any) => {
        e.preventDefault();
        try{
           const respos = await deleteUsers({id:data.data.id})
           if(respos) {
            dispatch(onOpenDeleteModal({modal:false, data:null}))
            dispatch(onFinishAlert({modal:true, msg:"Success Delete"}))
           }
            
        }
        catch(err){
            console.log(err, "coba");
            
        }
       
    }

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
          <Button variant='contained' onClick={handleDelete} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}