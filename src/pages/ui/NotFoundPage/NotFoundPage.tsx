
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from "./NotFoundPage.module.scss"


interface NotFoundPageProps{
    className?:string
}

export const NotFound = ({className}:NotFoundPageProps) => {


    const { t } = useTranslation("notfound")

    return (
        <div className={classNames(cls.NotFoundPage,{},[className])}>

            {t('Page not found')}

        </div>
    )
}


