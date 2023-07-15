import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { addCommentFormScheme } from '../types/addCommentFormScheme'



const initialState:addCommentFormScheme = {
   text : "",
}

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {

    setText:(state,action:PayloadAction<string>) =>{
          state.text = action.payload
    },
    
   
  }
}
)
// Action creators are generated for each case reducer function
export const { actions:addCommentFormActions } = addCommentFormSlice
export const { reducer:addCommentFormReducer } = addCommentFormSlice
