import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticalPage.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { ArticleList } from "entyes/Article/ui/ArticleList/ArticleList"
import { ArticleView } from "entyes/Article/model/types/article"

export interface ArticalPageProps{
    className?: string
 }



const ArticalPage = memo(({className}:ArticalPageProps) =>  {

    const {t} = useTranslation()

   

    return (
        <div className={classNames(cls.ArticalPage,{},[className])}>
                <ArticleList
                isLoading
                view={ArticleView.BIG}
                articles={[]}
            />
        </div>
    )


})
export default ArticalPage