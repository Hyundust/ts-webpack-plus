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
import { ArticleViewSelector} from "entyes/Article"
import { getArticlePageError, getArticlePageHasMore, getArticlePageInited, getArticlePageIsLoading, getArticlePageNumber, getArticlePageView } from "../model/selector/ArticlePageSelectors"
import { Page } from "shared/ui/Page/Page"
import { fetchNextArticlesPage } from "../model/service/fetchNextArticlesPage"

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
    const page = useSelector(getArticlePageNumber)
    const hasMore = useSelector(getArticlePageHasMore)
    const inited = useSelector(getArticlePageInited)


    const onChangeView = useCallback((view:ArticleView)=>{
        dispatch(ArticlePageActions.setView(view));

    },[dispatch]);

    const onLoadNextPart = useCallback(()=>{
      
        dispatch(fetchNextArticlesPage())

     } ,[dispatch])

     
    useInitialEffect(()=>{
        if(!inited){
        dispatch(ArticlePageActions.setInitialState());

        dispatch(fetchArticleList({
            page:1

        }))
       
    }})

    return (
        <ModuleLoad reducers={reducers}>
        <Page onScrollEnd = {onLoadNextPart} className={classNames(cls.ArticalPage,{},[className])}>
                <ArticleViewSelector view={view} onViewChange={onChangeView}/>
                <ArticleList
                isLoading = {isLoading}
                view={view}
                articles={articles}

            />
        </Page>
        </ModuleLoad>
    )


})
export default ArticalPage