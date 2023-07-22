import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticalDetailsPage.module.scss"
import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { ArticleDetails } from "entyes/Article"
import {  useNavigate, useParams } from "react-router-dom"
import { Text } from "shared/ui/Text/Text"
import { CommentItem } from "entyes/Comments/ui/CommentItem/CommentItem"
import { ModuleLoad, ReducerList } from "shared/lib/components/ModLoader/ModuleLoader"
import { articleDetailsCommentsReducer, getArticleComments } from "../model/slice/ArticleDetailsCommentSlice"
import { useSelector } from "react-redux"
import { getArticleCommentsIsLoading } from "../model/selector/commentSelector"
import { getArticleCommentsError } from "../model/selector/commentSelector"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect"
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { AddCommentForm } from "features/AddComment"
import { AddCommentForArticle } from "../model/services/addCommentsForArticle/addCommentsForArticle"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { Page } from "shared/ui/Page/Page"

export interface ArticalDetailsPageProps{
    className?: string
 }
const reducers:ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer

}


const ArticalDetailsPage = memo(({className}:ArticalDetailsPageProps) =>  {

    const {t} = useTranslation()

    const {id} = useParams<{id:string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentIsLoading= useSelector(getArticleCommentsIsLoading);
    const commentError = useSelector(getArticleCommentsError);
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    
    const onBackToList = useCallback(()=>{
            navigate(RoutePath.articals)
    },[navigate])


   

    const onSetComment = useCallback((text:string)=>{
        dispatch(AddCommentForArticle(text))
    },[dispatch])

    useInitialEffect(()=>{
        dispatch(fetchCommentsByArticleId(id));
    })



    if(!id){
        <Page className={classNames(cls.ArticalDetails,{},[className])}>
            {t("Article not found")}
         </Page>
    }

    return (
        <ModuleLoad reducers={reducers} removeAfterUnMount>
                    <Page className={classNames(cls.ArticalDetails,{},[className])}>
                        <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>{t("Back")}</Button>
                        <ArticleDetails id={id}/>
                        <Text className={cls.commentTitle} title = {t("Comments")|| ""}/>
                         <AddCommentForm onSetComment={onSetComment}/>
                        <CommentItem isLoading = {commentIsLoading} comments={comments}/>
                    </Page>  
        </ModuleLoad>
    )


})
export default ArticalDetailsPage 