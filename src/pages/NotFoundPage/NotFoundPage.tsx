
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from "./NotFoundPage.module.scss"
import { Page } from 'widgets/Page/Page'


interface NotFoundPageProps{
    className?:string
}

export const NotFound = ({className}:NotFoundPageProps) => {


    const { t } = useTranslation()

    return (
        <Page className={classNames(cls.NotFoundPage,{},[className])}>

            {t('Page not found')}

        </Page>
    )
}


