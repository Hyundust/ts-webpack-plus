import { Comment } from "entyes/Comments/model/types/commentTypes"

export interface ArticleDetailsCommentScheme{
    data?: Comment[],
    isLoading?:boolean
    error?:string
}