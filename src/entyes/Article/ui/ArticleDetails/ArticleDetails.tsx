import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleDetails.module.scss"
import { useTranslation } from "react-i18next"
import { ReducerList } from "shared/lib/components/ModLoader/ModuleLoader"
import { articleReducer } from "entyes/Article/model/slice/articleSlice"
import { ModuleLoad } from "shared/lib/components/ModLoader/ModuleLoader"
import { memo, useEffect } from "react"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { fetchArticleById } from "entyes/Article/model/services/fetchArticalById"
import { useSelector } from "react-redux"
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "entyes/Article/model/selector/getArticleDetails"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import { useCallback } from "react"
import { ArticleBlock } from "entyes/Article/model/types/article"
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent"
import { ArticleImgBlockComponent } from "../ArticleImgBlockComponent/ArticleImgBlockComponent"
import { ArticleBlockType } from "entyes/Article/model/types/article"


export interface ArticleDetailsProps{
    className?: string
    id?:string
 }


 const reducers:ReducerList = {
    articleDetails:articleReducer
 }
export const ArticleDetails = memo(({className,id}:ArticleDetailsProps) =>  {

    const {t} = useTranslation()
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImgBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);



    useEffect(()=>{
        dispatch(fetchArticleById(id || "1"))
    },[dispatch,id])
   

    return (
        <ModuleLoad reducers={reducers} removeAfterUnMount = {true}>
        <div className={classNames(cls.ArticleDetails,{},[className])}>
                    ArticleDetails  
        </div>
        </ModuleLoad>
    )


})