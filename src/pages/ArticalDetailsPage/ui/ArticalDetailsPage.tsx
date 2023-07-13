import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticalDetailsPage.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { ArticleDetails } from "entyes/Article"
import { useParams } from "react-router-dom"
import { Text } from "shared/ui/Text/Text"
import { CommentItem } from "entyes/Comments/ui/CommentItem/CommentItem"

export interface ArticalDetailsPageProps{
    className?: string
 }



const ArticalDetailsPage = memo(({className}:ArticalDetailsPageProps) =>  {

    const {t} = useTranslation()

    const {id} = useParams<{id:string}>()
   
    if(!id){
        <div className={classNames(cls.ArticalDetails,{},[className])}>
            {t("Article not found")}
    </div>
    }

    return (
        <div className={classNames(cls.ArticalDetails,{},[className])}>
            <ArticleDetails id={id}/>
            <Text className={cls.commentTitle} title = {t("Comments")|| ""}/>
            <CommentItem/>
        </div>
    )


})
export default ArticalDetailsPage 