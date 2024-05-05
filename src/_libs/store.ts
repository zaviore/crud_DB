import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from '@/_libs/redux/apiSlice'

export const store = configureStore({
  reducer: {
  
    [usersApi.reducerPath]: usersApi.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
   { console.log(usersApi.middleware, "ini apa");
    return (getDefaultMiddleware().concat(usersApi.middleware))}
})


setupListeners(store.dispatch)