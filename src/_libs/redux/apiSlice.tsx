import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';
import { BASE_URL } from '@/utils/consta';


export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes:["User"],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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
      invalidatesTags:["User"]
      
    }),
    updateUsers: builder.mutation({
      query: (val) => ({
        url:`/users/${val.id}`,
        method:"PATCH",
        body:val
      }),
      
      invalidatesTags:["User"]
      
    }),
    deleteUsers: builder.mutation({
      query: ({id}) => ({
        url:`/users/${id}`,
        method:"DELETE",
        body:id
      }), 
      invalidatesTags:["User"]
      
    }),

  
  }),

})

export const dataUsers = (state:RootState) => state.usersApi.queries
export const {useAddUsersMutation, useDeleteUsersMutation, useUpdateUsersMutation, useGetAllUsersQuery } = usersApi;