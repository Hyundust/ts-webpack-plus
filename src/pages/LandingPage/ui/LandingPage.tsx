import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

const LandingPage = () => {
    const { t } = useTranslation()

    return (
        <Page>

            {t('About us')}

        </Page>
    )
}

export default LandingPage