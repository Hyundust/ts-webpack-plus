

import { useState } from 'react';
import { useTranslation } from 'react-i18next'

export const MainPage = () => {
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


