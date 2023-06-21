// Importing the useContext hook from React and importing LOCAL_STORAGE_THEME_KEY, ThemeContext, and Theme enums from the themeContext file.

import { ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { StateScheme } from "../config/configScheme"
import { useDispatch } from "react-redux"

export interface StoreProviderProps{
    children: ReactNode,
    initialState?:StateScheme
 }


 

const StoreProvider = (props:StoreProviderProps) =>  {

    const {
        children,
        initialState
        } = props


    const store  = createReduxStore(initialState);
   
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )

}

export default StoreProvider;
