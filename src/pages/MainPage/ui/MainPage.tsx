

import { useState } from 'react';
import { useTranslation } from 'react-i18next'

const MainPage = () => {

    
    const { t } = useTranslation();


    



    return (
        <div style={{color:"blue"}}>

            {t('Chasing')}
        </div>
    )
}

export default MainPage
