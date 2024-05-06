import { useAddUsersMutation, useDeleteUsersMutation, useUpdateUsersMutation } from '@/_libs/redux/apiSlice';
import { _data, _dataDelete, onFinishAlert, onOpenDeleteModal, setData, setDataEdit } from '@/_libs/redux/dataUsers';
import { closeModal, openModal } from '@/_libs/redux/stateSlice';
import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';



interface dashboardInterface {
    formData: any;
    setFormData: (data: FormData) => void;
    handleSubmitForm: any;
    handleChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
    handleDeleteUser: any;
    handleUpdateUser:any;
}

const useDashboardService = (initialFormData?: any): dashboardInterface  => {
    const [formData, setFormData] = React.useState<any>(initialFormData);
  

    const dataUser = useSelector(_data)
    const paramsDelete = useSelector(_dataDelete)
    const [updateUsers] = useUpdateUsersMutation();
    const [addUsers] = useAddUsersMutation();
    const [deleteUsers] = useDeleteUsersMutation();
   
    const dispatch = useDispatch();

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState:any) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const handleUpdateUser = async (e: any) => {
        e.preventDefault();
        try {
          const respons: any = await updateUsers(formData);
    
         if (respons) {
          const updatedArray = await dataUser.map((obj: any) => {
            if (obj.id === formData.id) {
             return respons.data
            }
            return obj;
          });
    
            dispatch(setData(updatedArray));
            dispatch(setDataEdit({ modal: false, data: null }));
            dispatch(onFinishAlert({ modal: true, msg: "Success Edit User" }));
            setFormData(initialFormData);
          }
        } catch (res) {
          console.log(res, "coba");
        }
      };
      

    const handleDeleteUser = async (e:any) => {
        e.preventDefault();
        try{
           const respos = await deleteUsers({id:paramsDelete.data.id})
           if(respos) {
            dispatch(onOpenDeleteModal({modal:false, data:null}))
            dispatch(onFinishAlert({modal:true, msg: "Success Delete"}))
            const dataDeleteUpdate = await dataUser?.filter((val:any) => val.id !== paramsDelete.data.id)
            dispatch(setData(dataDeleteUpdate))
           }
            
        }
        catch(err){
            console.log(err, "coba");
        }
       
    }
    const handleSubmitForm = async (e:any) => {
        e.preventDefault();
        try {
            const response :any = await addUsers(formData);
            const newData = response?.data;
            const listUser = [...dataUser, newData];

            if (response) {
                dispatch(setData(listUser));
                dispatch(closeModal());
            }
        } catch (err) {
            console.log(err, "coba");
        }
    };

  return {
    handleSubmitForm,
    handleDeleteUser,
    handleChangeText, 
    formData,
    setFormData,
    handleUpdateUser

  }
}

export default useDashboardService