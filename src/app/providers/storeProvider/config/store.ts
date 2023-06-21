import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateScheme } from './configScheme'
import { userReducer } from 'entyes/User'
import { counterReducer } from 'entyes/Counter/model/slice/CounterSlice'
import { loginReducer } from 'features/AuthByUsername'

export function createReduxStore(initialState?: StateScheme) {
  const rootReducers: ReducersMapObject<StateScheme, any> = {
    // The second type parameter is `any` here, which means that your reducers can handle any action.
    user: userReducer,
    counter: counterReducer,
    loginForm: loginReducer
  }

  return configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}


