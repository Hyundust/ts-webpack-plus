import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from '../types/user'
import { LOCAL_STORAGE_KEY } from 'shared/const/localstorage'
import { UserScheme } from '../types/user'



const initialState:UserScheme = {
   _initialized:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setAuthData:(state,action:PayloadAction<User>) =>{
      state.authData = action.payload
    },
    initAuthData:(state) =>{
      const user = localStorage.getItem(LOCAL_STORAGE_KEY);
      if(user){
        state.authData = JSON.parse(user);

      }
      state._initialized = true;
    },
      logout:(state) =>{
        state.authData = undefined;
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      },
      
   
  }
}
)
// Action creators are generated for each case reducer function
export const { actions:userActions } = userSlice
export const { reducer:userReducer } = userSlice
