import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const Toggle = async () => {
        i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl')
    }
    return (

        <Button theme = {ThemeButton.CLEAR}
            onClick={Toggle}
            className={classNames(cls.LangSwitcher, {}, [className])}>
            {t('Language')}
        </Button>
    )
}
