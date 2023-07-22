import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entyes/Article/model/types/article";


export interface ArticlePageScheme extends EntityState<Article> {
    isLoading?:boolean,
    error?:string
    view:ArticleView
    //pagination
    page:number,
    limit?:number,
    hasMore:boolean,
    __inited:boolean
}
