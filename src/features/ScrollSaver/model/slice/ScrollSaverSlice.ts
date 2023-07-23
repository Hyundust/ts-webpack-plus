import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_KEY } from 'shared/const/localstorage'
import { ScrollSaverScheme } from '../types/ScrollSaverScheme'



const initialState:ScrollSaverScheme= {
   scroll:{}
}

export const scrollSaverSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {

    setScrollPos:(state,{payload}:PayloadAction<{path:string,position:number}>) =>{
        state.scroll[payload.path] = payload.position
    },
   
   
  }
}
)
// Action creators are generated for each case reducer function
export const { actions:scrollSaverActions } = scrollSaverSlice 
export const { reducer:scrollSaverReducer } = scrollSaverSlice 
