import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProfileScheme, ProfileUser } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'




const initialState:ProfileScheme = {
   readonly:true,
   loading:true,
   data:undefined,
   error:undefined
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

      },
      extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<ProfileUser>) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
    }
)
// Action creators are generated for each case reducer function
export const { actions:profileActions } = ProfileSlice
export const { reducer:profileReducer } = ProfileSlice
