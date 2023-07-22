// Importing the useContext hook from React and importing LOCAL_STORAGE_THEME_KEY, ThemeContext, and Theme enums from the themeContext file.

import { ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { StateScheme } from "../config/configScheme"
import {  ReducersMapObject } from "@reduxjs/toolkit"



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

   
    const store  = createReduxStore(initialState as StateScheme,asyncReducers as ReducersMapObject<StateScheme>,
        
        );
   
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )

}

export default StoreProvider;
