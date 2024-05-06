import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { FormControl, Input, TextField, Typography } from "@mui/material";
import {
  useAddUsersMutation,
  useUpdateUsersMutation,
} from "@/_libs/redux/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  _data,
  _dataEdit,
  onFinishAlert,
  setData,
  setDataEdit,
} from "@/_libs/redux/dataUsers";
import useDashboardService from './service/useDashboardAPI';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  padding: 2,
  outline: "none",
};

interface InterfaceModalUser {
  open: boolean;
  handleClose: any;
  title: string;
  children?: React.ReactNode;
  data: any;
}
interface FormData {
  username: string;
  name: string;
  email: string;
  website: string;
  phone: string;
  id: string;
}

const initialFormData: any = {
  id: "",
  name: "",
  username: "",
  email: "",
  website: "",
  phone: "",
};

export default function EditUser({
  open,
  data,
  handleClose,
  title,
  
}: InterfaceModalUser) {
 
  const {setFormData, formData, handleUpdateUser,handleChangeText } = useDashboardService(initialFormData)

  React.useEffect(() => {
    if (data) {
      setFormData({
        ...formData,
        id: data.id,
        name: data.name,
        username: data.username,
        email: data.email,
        website: data.website,
        phone: data.phone,
      });
    }
  }, [data]);

 
  const handleCloseModal = () => {
    handleClose();
    setFormData(initialFormData)
  };



  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, borderRadius: 5 }}>
          <Typography variant="h2" id="parent-modal-title">
            {title}
          </Typography>
          <form onSubmit={handleUpdateUser}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              size="small"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChangeText}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              size="small"
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChangeText}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              size="small"
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChangeText}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="website"
              size="small"
              label="Website"
              name="website"
              value={formData.website}
              onChange={handleChangeText}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="phone"
              size="small"
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChangeText}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
