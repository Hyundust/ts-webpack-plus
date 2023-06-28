import { CombinedState, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateScheme } from './configScheme'
import { userReducer } from 'entyes/User'
import { counterReducer } from 'entyes/Counter/model/slice/CounterSlice'
import { createReducerManager } from './reducersManager'
import { NavigateOptions } from "react-router-dom"
import { To } from "react-router-dom"
import { $api } from 'shared/api/api'
import { Reducer } from "@reduxjs/toolkit"

export function createReduxStore(
    initialState?: StateScheme,
    asyncReducers?:ReducersMapObject<StateScheme>,
    navigate?:(to: To, options?: NavigateOptions)=> void
    ) {

  const rootReducers: ReducersMapObject<StateScheme, any> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
    
  }
  const reducerManager = createReducerManager(rootReducers);


  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateScheme>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware:getDefaultMiddleware=>getDefaultMiddleware({
      thunk:{
        extraArgument:{
          api:$api,
          navigate
        }
      }
    })
  })

  //@ts-ignore
  store.reducerManager = reducerManager


  return store

}
// Infer the `AppDispatch` types from the createReduxStore itself
export type AppDispatch= ReturnType<typeof createReduxStore>["dispatch"]



