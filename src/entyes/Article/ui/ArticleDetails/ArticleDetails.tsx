import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleDetails.module.scss"
import { useTranslation } from "react-i18next"
import { ReducerList } from "shared/lib/components/ModLoader/ModuleLoader"
import { articleReducer } from "entyes/Article/model/slice/articleSlice"
import { ModuleLoad } from "shared/lib/components/ModLoader/ModuleLoader"
import { memo, useEffect } from "react"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { fetchArticleById } from "entyes/Article/model/services/fetchArticalById"


export interface ArticleDetailsProps{
    className?: string
    id?:string
 }


 const reducers:ReducerList = {
    articleDetails:articleReducer
 }
export const ArticleDetails = memo(({className,id}:ArticleDetailsProps) =>  {

    const {t} = useTranslation()
    const  dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchArticleById(id || "1"))
    },[dispatch])
   

    return (
        <ModuleLoad reducers={reducers} removeAfterUnMount = {true}>
        <div className={classNames(cls.ArticleDetails,{},[className])}>
                    ArticleDetails  
        </div>
        </ModuleLoad>
    )


})