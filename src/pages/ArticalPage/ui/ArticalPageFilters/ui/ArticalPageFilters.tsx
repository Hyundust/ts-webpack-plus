import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticalPageFilters.module.scss"
import { useTranslation } from "react-i18next"
import { ArticleViewSelector } from "entyes/Article"
import { useCallback } from "react"
import { ArticleSortField, ArticleType, ArticleView } from "entyes/Article/model/types/article"
import { ArticlePageActions } from "pages/ArticalPage/model/slice/articlePageSlice"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { useSelector } from "react-redux"
import { getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType, getArticlePageView } from "pages/ArticalPage/model/selector/ArticlePageSelectors"
import { Card } from "shared/ui/Card/Card"
import { CustomInput } from "shared/ui/CstmInpt/CustomInput"
import { ArticleSortSelector } from "entyes/Article/ui/ArticleSortSelector/ui/ArticleSortSelector"
import { SortOrder } from "shared/types"
import { fetchArticleList } from "pages/ArticalPage/model/service/fetchArticlesList"
import { useDebounce } from "shared/lib/hooks/useDebounce"
import { Tabs } from "shared/ui/Tabs/Tabs"
import { useMemo } from "react"
import { TabItem } from "shared/ui/Tabs/Tabs"


export interface ArticalPageFiltersProps{
        className?:string
 }



export const ArticalPageFilters = ({className}:ArticalPageFiltersProps) =>  {

    const {t} = useTranslation()
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlePageView);
    const sort = useSelector(getArticlePageSort);
    const order = useSelector(getArticlePageOrder);
    const search = useSelector(getArticlePageSearch);
    const articleType = useSelector(getArticlePageType)

    const fetchData = useCallback(()=>{
        dispatch(fetchArticleList({replaced:true}))
    },[dispatch])

    const debounceFetchData = useDebounce(fetchData,500);


    const onChangeView = useCallback((view:ArticleView)=>{
        dispatch(ArticlePageActions.setView(view));
        

    },[dispatch]);

    const onChangeSort = useCallback((sort:ArticleSortField)=>{
        dispatch(ArticlePageActions.setSort(sort));
        dispatch(ArticlePageActions.setPagePagination(1));
        debounceFetchData();
    },[dispatch,debounceFetchData]);

    const onChangeOrder= useCallback((order:SortOrder)=>{
        dispatch(ArticlePageActions.setOrder(order));
        dispatch(ArticlePageActions.setPagePagination(1));
        debounceFetchData();
    },[dispatch,debounceFetchData]);


    const onChangeSearch= useCallback((search:string)=>{
        dispatch(ArticlePageActions.setSearch(search));
        debounceFetchData();
    },[dispatch,debounceFetchData]);


    const onChangeType= useCallback((tabs:TabItem)=>{
        dispatch(ArticlePageActions.setType(tabs.value as ArticleType));
        debounceFetchData();
    },[dispatch,debounceFetchData]);


    const typeTabs = useMemo<TabItem[]>(  ()=>[ 
        {
            value:ArticleType.ALL,
            content:<>{t("ALL")}</>
        },
        {
            value:ArticleType.IT,
            content:<>{t("IT")}</>
        },
        {
            value:ArticleType.ECONOMICS,
            content:<>{t("Economics")}</>
        },
        {
            value:ArticleType.SCIENCE,
            content:<>{t("Science")}</>
        }



],[t])


    return (
        <div className={classNames(cls.ArticalPageFilters,{},[className])}>
            <div className={cls.sortWrapper}>
                    <ArticleSortSelector sort={sort} order={order} setOrder={onChangeOrder} setSort={onChangeSort} />
                         <ArticleViewSelector view={view} onViewChange={onChangeView}/>

            </div>
            <Card className={cls.searchCard}>
                <CustomInput value = {search} onChange={onChangeSearch} placeholder = {t("Seach by")|| ""}/>
            </Card>
            <Tabs tabs={typeTabs} value={articleType} onTabClick={onChangeType}/>                
        </div>
    )


}