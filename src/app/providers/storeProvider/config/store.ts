import { configureStore } from '@reduxjs/toolkit'
import { StateScheme } from './configScheme'
import { counterReducer } from 'entities'

export function createReduxStore(initialState?:StateScheme){
    return configureStore<StateScheme>(
        {   
            reducer:{
                counter:counterReducer
            } ,
            devTools:__IS_DEV__,
            preloadedState:initialState
        }
    )
}

