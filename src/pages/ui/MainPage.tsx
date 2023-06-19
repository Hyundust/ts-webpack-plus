

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
            <CustomInput value={value} onChange={changeValue} placeholder='Input you login'/>
        </div>
    )
}

export default MainPage
