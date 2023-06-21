import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateScheme } from './configScheme'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
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


