import { CombinedState, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateScheme } from './configScheme'
import { createReducerManager } from './reducersManager'
import { $api } from 'shared/api/api'
import { Reducer } from "@reduxjs/toolkit"
import { scrollSaverReducer } from 'features/ScrollSaver/model/slice/ScrollSaverSlice'

export function createReduxStore(
    initialState?: StateScheme,
    asyncReducers?:ReducersMapObject<StateScheme>,
  
    ) {

  const rootReducers: ReducersMapObject<StateScheme> = {
    ...asyncReducers,
    scrollSaver:scrollSaverReducer,
   
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



