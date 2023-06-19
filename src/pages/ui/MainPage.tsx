

import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import { CustomInput } from 'shared/ui/CstmInpt/CustomInput'

function MainPage () {
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
