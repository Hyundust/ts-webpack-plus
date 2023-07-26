import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleEditPage.module.scss"
import { useTranslation } from "react-i18next"
import { Page } from "widgets/Page/Page"
import { useParams } from "react-router-dom"

export interface ArticleEditPageProps{
    className?: string
 }



const ArticleEditPage = ({className}:ArticleEditPageProps) =>  {

    const {t} = useTranslation()
    const {id} = useParams<{id:string}>()
    const isEdit = Boolean(id)

    return (
        <Page className={classNames(cls.ArticleEditPage,{},[className])}>
                    {isEdit ? t("Editing page with id:")+ id: t("Creating new page") }
        </Page>
    )


}
export default  ArticleEditPage 