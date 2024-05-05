'use client'
import { Grid, Box, Collapse, Alert, IconButton } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import UserListData from '@/app/(DashboardLayout)/components/dashboard/UserList';

import { useAddUsersMutation, useDeleteUsersMutation, useGetAllUsersQuery, useUpdateUsersMutation } from '@/_libs/redux/apiSlice';
import { useState } from 'react';
import { CloseOutlined } from '@mui/icons-material';


const Dashboard = () => {

  const { data:dataUser, error:errorUser, isLoading:loadingUser } = useGetAllUsersQuery('');
  const  [addUsers] = useAddUsersMutation();
  const  [deleteUsers] = useDeleteUsersMutation();
  const  [updateUsers] = useUpdateUsersMutation();
  const [modal ,setmodal] = useState(true)

  
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Collapse in={modal}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setmodal(false);
              }}
            >
              <CloseOutlined fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Click the close icon to see the Collapse transition in action!
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
