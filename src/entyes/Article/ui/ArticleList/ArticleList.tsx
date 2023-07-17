import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleList.module.scss"
import { useTranslation } from "react-i18next"
import { Article, ArticleView } from "entyes/Article/model/types/article"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"

export interface ArticleListProps{
    className?:string
    articles:Article[]
    isLoading?:boolean
    view?:ArticleView
 }



export const ArticleList = ({
                            className,
                            articles,
                            isLoading,
                            view = ArticleView.SMALL 
                            }:ArticleListProps) =>  {
ArticleView


    const {t} = useTranslation()

   const renderArticle = (article:Article)=>{
                <ArticleListItem article={article} view={ArticleView.BIG}/>
   }

    return (
        <div className={classNames(cls.ArticleList,{},[className])}>
            {articles.length>0 
                              ? articles.map(renderArticle) 
                              :null
        }
        </div>
    )


}