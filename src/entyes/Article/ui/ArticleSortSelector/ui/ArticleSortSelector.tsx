import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleSortSelector.module.scss"
import { useTranslation } from "react-i18next"
import {memo, useCallback, useMemo} from "react"
import { Select } from "shared/ui/Select/Select"
import { ArticleSortField } from "entyes/Article/model/types/article"
import { SortOrder } from "shared/types"


export interface LoginFormProps{
    className?: string
    sort:ArticleSortField
    order:SortOrder
    setSort:(newSort:ArticleSortField)=>void
    setOrder:(newOrder:SortOrder)=>void
   
 }



export const ArticleSortSelector = memo((props:LoginFormProps) =>  {
    const {className,setSort,setOrder,order,sort} = props

    const {t} = useTranslation();
    const OptionsArray = useMemo(()=>[
        {
            value:"asc",
            content:t("Ascending")
        },
        {
            value:"desc",
            content:t("Descending")
        },
        
        

    ],[])
    const SortFieldArray = useMemo(()=>[
        {
            value:ArticleSortField.VIEWS,
            content:t("By views")
        },
        {
            value:ArticleSortField.CREATED,
            content:t("By date")
        },
        {
            value:ArticleSortField.TITLE,
            content:t("By title")
        },
        
        

    ],[t])
    const setSortHandler = useCallback((newSort: string) => {

        setSort(newSort as ArticleSortField)
      },[setSort]);

    const setOrderHandler= useCallback((newOrder: string) => {
        setOrder(newOrder as SortOrder);
      },[setOrder]);

   
    
   

    return (
        <div className={classNames(cls.ArticleSort,{},[className])}>
                <Select 
                        options = {SortFieldArray} 
                        label={t("Sorting by")|| ""}
                        value = {sort}
                        onChange={setSortHandler}
                />
                <Select 
                        options = {OptionsArray} 
                        label={t("by")|| ""}
                        value = {order}
                        onChange={setOrderHandler}
                        className={cls.order}
                        />
                
        </div>
    )


})