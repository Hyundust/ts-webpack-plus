import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateScheme } from './configScheme'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export function createReduxStore(initialState?:StateScheme){
    const rootReducers: ReducersMapObject<StateScheme> = {
    
                            user:userReducer,
                            counter:counterReducer
    }

    return configureStore<StateScheme>(
        {   
            reducer:rootReducers,
            
            devTools:__IS_DEV__,
            preloadedState:initialState
        }
    )
}

