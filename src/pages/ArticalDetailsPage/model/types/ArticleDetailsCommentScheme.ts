import { Comment } from "entyes/Comments/model/types/commentTypes"
import { EntityState } from "@reduxjs/toolkit"


export interface ArticleDetailsCommentScheme extends EntityState<Comment>{
    data?: Comment[],
    isLoading?:boolean,
    error?:string,
    
}