import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticalPage.module.scss"
import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { ArticleList } from "entyes/Article/ui/ArticleList/ArticleList"
import { ModuleLoad, ReducerList } from "shared/lib/components/ModLoader/ModuleLoader"
import { ArticlePageActions, ArticlePageReducer, ArticlePageSlice, getArticlesPage } from "../model/slice/articlePageSlice"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect"
import { fetchArticleList } from "../model/service/fetchArticlesList"
import { useSelector } from "react-redux"
import { getArticlePageError, getArticlePageHasMore, getArticlePageInited, getArticlePageIsLoading, getArticlePageNumber, getArticlePageView } from "../model/selector/ArticlePageSelectors"
import { Page } from "widgets/Page/Page"
import { fetchNextArticlesPage } from "../model/service/fetchNextArticlesPage"
import { ArticalPageFilters } from "./ArticalPageFilters/ui/ArticalPageFilters"
import { useSearchParams } from "react-router-dom"
import { initArticlesPage } from "../model/service/initArticlesPage"


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


    const [searchParams] = useSearchParams();

   

    const onLoadNextPart = useCallback(()=>{
      
        dispatch(fetchNextArticlesPage(
            
        ))

     } ,[dispatch])

     
    useInitialEffect(()=>{
        
        dispatch(initArticlesPage(searchParams));

        
       
    })

    return (
        <ModuleLoad reducers={reducers}>
        <Page onScrollEnd = {onLoadNextPart} className={classNames(cls.ArticalPage,{},[className])}>
            <ArticalPageFilters/>
                <ArticleList
                isLoading = {isLoading}
                view={view}
                articles={articles}
                className={cls.List}

            />
        </Page>
        </ModuleLoad>
    )


})
export default ArticalPage