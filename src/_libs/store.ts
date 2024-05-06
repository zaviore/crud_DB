import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from '@/_libs/redux/apiSlice'
import { modalAdd } from './redux/stateSlice'
import { dataEditState } from './redux/dataUsers'
// import {allertState} from './redux/dataUsers'


export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [modalAdd.reducerPath]: modalAdd.reducer,
    [dataEditState.reducerPath]: dataEditState.reducer
  },
 
  middleware: (getDefaultMiddleware) =>
   {
    return (getDefaultMiddleware().concat(usersApi.middleware))}
})


export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)