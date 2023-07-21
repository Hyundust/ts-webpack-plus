import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticalPage.module.scss"
import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { ArticleList } from "entyes/Article/ui/ArticleList/ArticleList"
import { ArticleView } from "entyes/Article/model/types/article"
import { ModuleLoad, ReducerList } from "shared/lib/components/ModLoader/ModuleLoader"
import { ArticlePageActions, ArticlePageReducer, ArticlePageSlice, getArticlesPage } from "../model/slice/articlePageSlice"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect"
import { fetchArticleList } from "../model/service/fetchArticlesList"
import { useSelector } from "react-redux"
import { ArticleViewSelector, articleActions } from "entyes/Article"
import { getArticleDetailsIsLoading } from "entyes/Article/model/selector/getArticleDetails"
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from "../model/selector/ArticlePageSelectors"

export interface ArticalPageProps{
    className?: string
 }


const reducers:ReducerList = {
    articlesPage:ArticlePageReducer
}


const ArticalPage = memo(({className}:ArticalPageProps) =>  {

    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticlesPage.selectAll)
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView);


    console.log("articles:", articles);
    console.log("isLoading:", isLoading);
    console.log("error:", error);
    console.log("view:", view);


    const onChangeView = useCallback((view:ArticleView)=>{
        dispatch(ArticlePageActions.setView(view));

    },[dispatch])

    useInitialEffect(()=>{
        dispatch(fetchArticleList())
        dispatch(ArticlePageActions.setInitialState())
    })

    return (
        <ModuleLoad reducers={reducers}>
        <div className={classNames(cls.ArticalPage,{},[className])}>
                <ArticleViewSelector view={view} onViewChange={onChangeView}/>
                <ArticleList
                isLoading = {isLoading}
                view={view}
                articles={articles}
                
            />
        </div>
        </ModuleLoad>
    )


})
export default ArticalPage