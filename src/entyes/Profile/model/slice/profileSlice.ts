import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileUser, ProfileScheme } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/UpdateProfileData/UpdateProfileData';

const initialState: ProfileScheme = {
    readonly: true,
    loading: false,
    error: undefined,
    data: undefined
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly:(state,action:PayloadAction<boolean>)=>{
            state.readonly = action.payload;
        },
        cancelEditToServer:(state)=>{
            state.readonly = true;
            state.form = state.data
            state.ValidateError = undefined
        },
        updateProfile:(state,action:PayloadAction<ProfileUser>)=>{
            state.form = {
                          ...state.data,
                          ...action.payload
                         }
        },
        changeProfile:(state,action:PayloadAction<ProfileUser>)=>{
            state.data = {
                          ...state.data,
                          ...action.payload
                         }
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchProfileData.fulfilled, (
                state,
                action: PayloadAction<ProfileUser>,
            ) => {
                state.loading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.loading= false;
                state.error = action.payload;
            })
            ///
            .addCase(updateProfileData.pending, (state) => {
                state.loading = true;
                state.ValidateError = undefined
            })
            .addCase(updateProfileData.fulfilled, (
                state,
                action: PayloadAction<ProfileUser>,
            ) => {
                state.loading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true
                state.ValidateError = undefined
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.loading= false;
                state.ValidateError = action.payload;
            });
            
    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
