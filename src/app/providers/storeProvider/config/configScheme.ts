import { EnhancedStore, ReducersMapObject } from "@reduxjs/toolkit"
import { AnyAction } from "@reduxjs/toolkit"
import { Reducer } from "@reduxjs/toolkit"
import { CombinedState} from "@reduxjs/toolkit"
import { AxiosInstance } from "axios"

export interface StateScheme{
 
  

}
export type StateSchemeKey = keyof StateScheme;
export type MountedReducers = OptionalRecord<StateSchemeKey,boolean>

export interface ReducerManager{

  getReducerMap:() => ReducersMapObject<StateScheme>,
  reduce:(state: StateScheme, action: AnyAction)=>CombinedState<StateScheme>,
  add:(key:StateSchemeKey, reducer:Reducer)=>void
  remove:(key:StateSchemeKey)=>void
  //true - mounted,false - unmounted
  getMountedReducers:()=>MountedReducers

}

export interface reduxStoreWithManager extends EnhancedStore<StateScheme> {
      reducerManager:ReducerManager
}


export interface ThunkExtraArg{
  api:AxiosInstance
  
}

export interface ThunkConfig<T>{
  rejectValue: T
  extra:ThunkExtraArg
  state:StateScheme


}