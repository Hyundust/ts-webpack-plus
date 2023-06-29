import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticalDetailsPage.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { ArticleDetails } from "entyes/Article"

export interface ArticalDetailsPageProps{
    className?: string
 }



const ArticalDetailsPage = memo(({className}:ArticalDetailsPageProps) =>  {

    const {t} = useTranslation()

   

    return (
        <div className={classNames(cls.ArticalDetails,{},[className])}>
            <ArticleDetails/>
        </div>
    )


})
export default ArticalDetailsPage 