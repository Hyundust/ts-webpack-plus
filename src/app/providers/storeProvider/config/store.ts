import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateScheme } from './configScheme'
import { userReducer } from 'entyes/User'
import { counterReducer } from 'entyes/Counter/model/slice/CounterSlice'
import { createReducerManager } from './reducersManager'
import { DeepPartial } from '@reduxjs/toolkit'

export function createReduxStore(initialState?: StateScheme,asyncReducers?:ReducersMapObject<StateScheme>) {
  
  const rootReducers: ReducersMapObject<StateScheme, any> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer
  }
  const reducerManager = createReducerManager(rootReducers);


  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })

  //@ts-ignore
  store.reducerManager = reducerManager


  return store
}


