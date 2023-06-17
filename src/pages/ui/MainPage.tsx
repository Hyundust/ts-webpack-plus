

import { Counter } from 'entities'
import { useTranslation } from 'react-i18next'

function MainPage () {
    const { t } = useTranslation()

    return (
        <div>

            {t('Chasing')}
            <Counter/>
        </div>
    )
}

export default MainPage
