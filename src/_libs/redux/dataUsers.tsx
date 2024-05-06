import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


export interface CounterState {
  modal: boolean;
  data:any;
  alert:any;
  delete:any;
  edit:any;

}

const initialState: CounterState = {
  modal: false,
  data: null,
  edit:{
    modal:false,
    data:null
  },
  delete:{
    modal:false,
  },
  alert: {
    modal:false,
    msg:''
  }
}


export const dataEditState = createSlice({
  name: 'dataEdit',
  reducerPath:"dataEdit",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.modal = true
      state.data = action.payload
    },
    setDataEdit: (state, action) => {
      state.modal = true
      state.edit = action.payload
    },
    onCloseDataEdit: (state) => {
      state.modal = false;
      state.data = null;
    },
    onOpenDeleteModal: (state, action ) => {
      state.delete = action.payload
    },
  
    onFinishAlert: (state, action) => {
      state.alert = action.payload;
    },
    onCloseAlert: (state) => {
      state.alert = null;
    }
   
  },
})




// export const allert = (state:RootState) => state.allertState
export const { setDataEdit, onCloseDataEdit, onFinishAlert, onOpenDeleteModal, setData } = dataEditState.actions
export const _data = (state:RootState) => state.dataEdit.data
export const _dataEdit = (state:RootState) => state.dataEdit.edit
export const _dataDelete = (state:RootState) => state.dataEdit.delete
export const _alert = (state:RootState) => state.dataEdit.alert
export default dataEditState.reducer