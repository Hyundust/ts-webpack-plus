import { EnhancedStore, ReducersMapObject } from "@reduxjs/toolkit"
import { CounterScheme } from "entyes/Counter"
import { UserScheme } from "entyes/User"
import { LoginScheme } from "features/AuthByUsername"
import { AnyAction } from "@reduxjs/toolkit"
import { Reducer } from "@reduxjs/toolkit"
import { CombinedState} from "@reduxjs/toolkit"
import { ProfileScheme } from "entyes/Profile"
import { AxiosInstance } from "axios"
import { To,NavigateOptions } from "react-router-dom"

export interface StateScheme{
  counter:CounterScheme
  user:UserScheme
  //async reducer
  loginForm?:LoginScheme
  profile?:ProfileScheme

}
export type StateSchemeKey = keyof StateScheme;


export interface ReducerManager{

  getReducerMap:() => ReducersMapObject<StateScheme>,
  reduce:(state: StateScheme, action: AnyAction)=>CombinedState<StateScheme>,
  add:(key:StateSchemeKey, reducer:Reducer)=>void
  remove:(key:StateSchemeKey)=>void

}

export interface reduxStoreWithManager extends EnhancedStore<StateScheme> {
      reducerManager:ReducerManager
}


export interface ThunkExtraArg{
  api:AxiosInstance
  navigate?:(to: To, options?: NavigateOptions)=> void
}

export interface ThunkConfig<T>{
  rejectValue: T
  extra:ThunkExtraArg
  state:StateScheme


}