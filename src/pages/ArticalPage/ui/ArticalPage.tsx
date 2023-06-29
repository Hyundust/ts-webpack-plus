import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticalPage.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"


export interface ArticalPageProps{
    className?: string
 }



const ArticalPage = memo(({className}:ArticalPageProps) =>  {

    const {t} = useTranslation()

   

    return (
        <div className={classNames(cls.ArticalPage,{},[className])}>
                Articals
        </div>
    )


})
export default ArticalPage