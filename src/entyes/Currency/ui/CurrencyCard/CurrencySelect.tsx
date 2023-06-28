import { Mods, classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Select } from "shared/ui/Select/Select"
import { Currency } from "entyes/Currency/model/types/currency"
import { useCallback } from "react"
import { memo } from "react"

export interface CurrencySelectProps{
    className?: string
    value?:Currency
    onChange?:(value:Currency)=>void
    readonly?:boolean
 }


const options = [
    { value: "EUR", content: "EUR" },
    { value: "USD", content: "USD" },
    { value: "GBP", content: "GBP" },
    { value: "AUD", content: "AUD" },
    { value: "CAD", content: "CAD" },
    { value: "CHF", content: "CHF" },
    { value: "CNY", content: "CNY" },
    { value: "DKK", content: "DKK" },
    { value: "HKD", content: "HKD" },
    { value: "HUF", content: "HUF" },
    { value: "IDR", content: "IDR" },
    { value: "ILS", content: "ILS" },
    { value: "INR", content: "INR" },
    { value: "JPY", content: "JPY" },
    { value: "KRW", content: "KRW" },
    { value: "MXN", content: "MXN" },
    { value: "MYR", content: "MYR" },
    { value: "NOK", content: "NOK" },
    { value: "NZD", content: "NZD" },
    { value: "PHP", content: "PHP" },
    { value: "PLN", content: "PLN" },
    { value: "RUB", content: "RUB" },
    { value: "SEK", content: "SEK" },
    { value: "SGD", content: "SGD" },
    { value: "THB", content: "THB" },
    { value: "TRY", content: "TRY" },
    { value: "ZAR", content: "ZAR" },
    { value: "UAH", content: "UAH" }
  ]
  
export const CurrencySelect = memo(({className,value,onChange,readonly}:CurrencySelectProps) =>  {

   const {t} = useTranslation()

   const mods:Mods = {

   }
    const onChangeHandler = useCallback((value:string)=>{
        onChange?.(value as Currency)
    },[onChange])

    return (
        <Select 
                    className={classNames("",mods,[className])}
                    label={t("Choose currency")|| ""} 
                    options={options}
                    value={value}
                    onChange={onChangeHandler}
                    readonly = {readonly}
                    />

        
    )


})