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
import {  ArticleDetailsScheme } from "entyes/Article/model/types/articleDetailsScheme"
import { ArticleDetailsCommentScheme } from "pages/ArticalDetailsPage"
import { addCommentFormScheme } from "features/AddComment"
import { ArticlePageScheme } from "pages/ArticalPage"
import { ScrollSaverScheme } from "features/ScrollSaver/model/types/ScrollSaverScheme"
import { ArticleDetailsPageRecomendationScheme } from "pages/ArticalDetailsPage/model/types/ArticleDetailsPageRecomendationScheme"
import { articleDetailsPageScheme } from "pages/ArticalDetailsPage/model/types"
export interface StateScheme{
  counter:CounterScheme
  user:UserScheme
  scrollSaver:ScrollSaverScheme
  //async reducer
  loginForm?:LoginScheme
  profile?:ProfileScheme
  articleDetails?:ArticleDetailsScheme
  addComment?:addCommentFormScheme
  articlesPage?:ArticlePageScheme
  articleDetailsPage?:articleDetailsPageScheme
  

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