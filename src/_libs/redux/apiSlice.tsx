import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/users`,
      
    }),
    addUsers: builder.mutation({
      query: (val) => ({
        url:"/users",
        method:"POST",
        body:val
      }), 
      
    }),
    updateUsers: builder.mutation({
      query: (val) => ({
        url:`/users/${val.id}`,
        method:"PATCH",
        body:val
      }), 
      
    }),
    deleteUsers: builder.mutation({
      query: ({id}) => ({
        url:`/users/${id}`,
        method:"DELETE",
        body:id
      }), 
      
    }),

  
  }),

})

export const {useAddUsersMutation, useDeleteUsersMutation, useUpdateUsersMutation, useGetAllUsersQuery } = usersApi;