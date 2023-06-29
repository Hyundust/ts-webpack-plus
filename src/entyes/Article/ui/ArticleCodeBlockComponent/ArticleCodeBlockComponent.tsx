import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleCodeBlockComponent.module.scss"
import { useTranslation } from "react-i18next"

export interface ArticleCodeBlockProps{
    className?: string
 }



export const StoreProvider = ({className}:ArticleCodeBlockProps) =>  {

    const {t} = useTranslation()

   

    return (
        <div className={classNames(cls.ArticleCodeBlock,{},[className])}>
                ArticleCodeBlock
        </div>
    )


}