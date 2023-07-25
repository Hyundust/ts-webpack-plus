import { Comment } from "entyes/Comments/model/types/commentTypes"
import { EntityState } from "@reduxjs/toolkit"
import { Article } from "entyes/Article/model/types/article"


export interface ArticleDetailsPageRecomendationScheme extends EntityState<Article>{
    isLoading?:boolean,
    error?:string,
    
}