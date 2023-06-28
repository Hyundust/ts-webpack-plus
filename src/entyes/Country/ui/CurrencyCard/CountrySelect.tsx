import { Mods, classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Select } from "shared/ui/Select/Select"
import { Currency } from "entyes/Currency/model/types/currency"
import { useCallback } from "react"
import { memo } from "react"
import { Country } from "entyes/Country/model/types/country"

export interface CountrySelectProps{
    className?: string
    value?:Country
    onChange?:(value:Country)=>void
    readonly?:boolean
 }


const options = [
    { value: Country.Germany, content: Country.Germany },
  { value: Country.France, content: Country.France },
  { value: Country.Italy, content: Country.Italy },
  { value: Country.Spain, content: Country.Spain },
  { value: Country.Sweden, content: Country.Sweden },
  { value: Country.UnitedStates, content: Country.UnitedStates },
  { value: Country.UnitedArabEmirates, content: Country.UnitedArabEmirates },
  { value: Country.UnitedKingdom, content: Country.UnitedKingdom },
  { value: Country.Poland, content: Country.Poland },
  { value: Country.Greece, content: Country.Greece },
  { value: Country.Czech, content: Country.Czech },
  { value: Country.Croatia, content: Country.Croatia },
  { value: Country.Hungary, content: Country.Hungary },
  { value: Country.Ireland, content: Country.Ireland },
  { value: Country.Romania, content: Country.Romania },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Netherlands, content: Country.Netherlands },
  { value: Country.Norway, content: Country.Norway },
  { value: Country.Portugal, content: Country.Portugal },
  { value: Country.Switzerland, content: Country.Switzerland },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Vietnam, content: Country.Vietnam }
  ]
  
export const CountrySelect = memo(({className,value,onChange,readonly}:CountrySelectProps) =>  {

   const {t} = useTranslation()

   const mods:Mods = {

   }
    const onChangeHandler = useCallback((value:string)=>{
        onChange?.(value as Country)
    },[onChange])

    return (
        <Select 
                    className={classNames("",mods,[className])}
                    label={t("Choose country")|| ""} 
                    options={options}
                    value={value}
                    onChange={onChangeHandler}
                    readonly = {readonly}
                    />

        
    )


})