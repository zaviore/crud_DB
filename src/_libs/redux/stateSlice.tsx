import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


export interface CounterState {
  value: boolean
}

const initialState: CounterState = {
  value: false,
}

export const modalAdd = createSlice({
  name: 'add',
  reducerPath:"modalAdd",
  initialState,
  reducers: {
    openModal: (state) => {
      state.value = true
    },
    closeModal: (state) => {
      state.value = false
    },
   
  },
})




export const modalValue = (state:RootState) => state.modalAdd.value
export const { openModal, closeModal } = modalAdd.actions

export default modalAdd.reducer