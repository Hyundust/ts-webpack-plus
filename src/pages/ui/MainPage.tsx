
import { useTranslation } from 'react-i18next'

function MainPage () {
    const { t } = useTranslation()

    return (
        <div>

            {t('Chasing')}

        </div>
    )
}

export default MainPage
