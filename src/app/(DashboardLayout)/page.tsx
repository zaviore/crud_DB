'use client'
import { useEffect, useState } from 'react';
import { Grid, Box, Collapse, Alert, IconButton } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import UserListData from '@/app/(DashboardLayout)/components/dashboard/UserList';
import { useSelector, useDispatch } from 'react-redux'
import { closeModal,modalValue } from '@/_libs/redux/stateSlice'

import { useGetAllUsersQuery } from '@/_libs/redux/apiSlice';
import { CloseOutlined } from '@mui/icons-material';
import CreateUser from './components/dashboard/addmember';
import { _dataEdit, _dataDelete,  onOpenDeleteModal, _alert, onFinishAlert, setDataEdit } from '@/_libs/redux/dataUsers';
import EditUser from './components/dashboard/editUser';
import DeleteDialog from './components/dashboard/deleteDialog';


const Dashboard = () => {
  const dispatch = useDispatch();
  const { data:dataUser, error:errorUser, isLoading:loadingUser } = useGetAllUsersQuery('');

  const open = useSelector(modalValue);
  const dataEdit = useSelector(_dataEdit);
  const dataDelete = useSelector(_dataDelete)
  const dataAlert = useSelector(_alert)


  
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <DeleteDialog open={dataDelete.modal} data={dataDelete} handleClose={() => dispatch(onOpenDeleteModal({modal:false, data:null}))} />
      <CreateUser title='Create Users' open={open} handleClose={() =>dispatch(closeModal())}/> 
      <EditUser title='Edit Users' data={dataEdit && dataEdit.data} open={dataEdit.modal} handleClose={() =>dispatch(setDataEdit({modal:false, data:null}))}/> 
      <Collapse in={dataAlert.modal}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch(onFinishAlert({modal:false, msg: ""}))
              }}
            >
              <CloseOutlined fontSize="inherit"/>
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
         {dataAlert.msg}
        </Alert>
      </Collapse>
    <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <UserListData  data={dataUser} loading={loadingUser} error={errorUser}/>
        </Grid>
       
      </Grid>
    </Box>
  </PageContainer>
  )
}

export default Dashboard;
