// Importing the useContext hook from React and importing LOCAL_STORAGE_THEME_KEY, ThemeContext, and Theme enums from the themeContext file.

import { ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { StateScheme } from "../config/configScheme"
import {  ReducersMapObject } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"
import { NavigateOptions } from "react-router-dom"
import { To } from "react-router-dom"

export interface StoreProviderProps{
    children: ReactNode,
    initialState?:DeepPartial<StateScheme>,
    asyncReducers?:DeepPartial<ReducersMapObject<StateScheme>>,
    
    
 }


 

const StoreProvider = (props:StoreProviderProps) =>  {

    const {
        children,
        initialState,
        asyncReducers
        } = props

    const navigate = useNavigate();
    const store  = createReduxStore(initialState as StateScheme,asyncReducers as ReducersMapObject<StateScheme>,navigate );
   
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )

}

export default StoreProvider;
