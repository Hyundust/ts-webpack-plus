import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleListItem.module.scss"
import { useTranslation } from "react-i18next"
import { Article, ArticleView } from "entyes/Article/model/types/article"

export interface ArticleListItemProps{
    className?:string
    article:Article
    view:ArticleView
 }



export const ArticleListItem = ({className,article,view}:ArticleListItemProps) =>  {

    const {t} = useTranslation()

   

    return (
        <div className={classNames(cls.ArticleListItem,{},[className])}>
                    {article.title}
        </div>
    )


}