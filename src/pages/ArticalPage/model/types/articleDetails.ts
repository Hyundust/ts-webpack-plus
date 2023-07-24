import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleType, ArticleView } from "entyes/Article/model/types/article";
import { SortOrder } from "shared/types";
import { ArticleSortField } from "entyes/Article/model/types/article";

export interface ArticlePageScheme extends EntityState<Article> {
    isLoading?:boolean,
    error?:string
    view:ArticleView
    //pagination
    page:number,
    limit?:number,
    hasMore:boolean,
    __inited:boolean,
    //filters/
    order:SortOrder,
    sort:ArticleSortField,
    search:string,
    type:ArticleType
   

}
