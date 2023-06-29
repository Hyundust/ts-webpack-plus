import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleImgBlockComponent.module.scss"
import { useTranslation } from "react-i18next"

export interface ArticleImgBlockComponentProps{
    className?: string
 }



export const ArticleImgBlockComponent = ({className}:ArticleImgBlockComponentProps) =>  {

    const {t} = useTranslation()

   

    return (
        <div className={classNames(cls.ArticleImgBlock,{},[className])}>
                    ArticleImgBlock
        </div>
    )


}