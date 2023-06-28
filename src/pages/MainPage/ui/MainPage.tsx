

import { useState } from 'react';
import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation();
    const [value,setValue] = useState("")

    const changeValue = (value:string) =>{
        setValue(value)
    }



    return (
        <div>

            {t('Chasing')}
        </div>
    )
}

export default MainPage
