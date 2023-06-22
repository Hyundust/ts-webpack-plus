import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateScheme } from './configScheme'
import { userReducer } from 'entyes/User'
import { counterReducer } from 'entyes/Counter/model/slice/CounterSlice'
import { createReducerManager } from './reducersManager'


export function createReduxStore(initialState?: StateScheme) {
  const rootReducers: ReducersMapObject<StateScheme, any> = {
    // The second type parameter is `any` here, which means that your reducers can handle any action.
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


