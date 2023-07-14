import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticalDetailsPage.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { ArticleDetails } from "entyes/Article"
import { useParams } from "react-router-dom"
import { Text } from "shared/ui/Text/Text"
import { CommentItem } from "entyes/Comments/ui/CommentItem/CommentItem"
import { ModuleLoad, ReducerList } from "shared/lib/components/ModLoader/ModuleLoader"
import { articleDetailsCommentsReducer, getArticleComments } from "../model/slice/ArticleDetailsCommentSlice"
import { useSelector } from "react-redux"
import { getArticleCommentsIsLoading } from "../model/selector/commentSelector"
import { getArticleCommentsError } from "../model/selector/commentSelector"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect"
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import { useDispatch } from "react-redux"
import AddCommentsForm from "features/AddComment/ui/AddComment"
import { AddCommentForm } from "features/AddComment"

export interface ArticalDetailsPageProps{
    className?: string
 }
const reducers:ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer

}


const ArticalDetailsPage = memo(({className}:ArticalDetailsPageProps) =>  {

    const {t} = useTranslation()

    const {id} = useParams<{id:string}>()
    const comments = useSelector(getArticleComments.selectAll)
    const commentIsLoading= useSelector(getArticleCommentsIsLoading)
    const commentError = useSelector(getArticleCommentsError)
    const dispatch = useDispatch();


    useInitialEffect(()=>{
        dispatch(fetchCommentsByArticleId(id));
    })


    if(!id){
        <div className={classNames(cls.ArticalDetails,{},[className])}>
            {t("Article not found")}
    </div>
    }

    return (
        <ModuleLoad reducers={reducers} removeAfterUnMount>
                    <div className={classNames(cls.ArticalDetails,{},[className])}>
                        <ArticleDetails id={id}/>
                        <Text className={cls.commentTitle} title = {t("Comments")|| ""}/>
                         <AddCommentForm/>
                        <CommentItem isLoading = {commentIsLoading} comments={comments}/>
                    </div>  
        </ModuleLoad>
    )


})
export default ArticalDetailsPage 