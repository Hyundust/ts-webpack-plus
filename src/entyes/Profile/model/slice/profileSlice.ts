import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_KEY } from 'shared/const/localstorage'
import { ProfileScheme } from '../types/profile'



const initialState:ProfileScheme = {
   readonly:true,
   loading:true,
   data:null,
   error:null
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
      }
    }
)
// Action creators are generated for each case reducer function
export const { actions:profileActions } = ProfileSlice
export const { reducer:profileReducer } = ProfileSlice
