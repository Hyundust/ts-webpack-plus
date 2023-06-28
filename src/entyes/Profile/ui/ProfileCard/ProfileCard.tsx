import { Mods, classNames } from "shared/lib/classNames/classNames"
import cls from "./ProfileCard.module.scss"
import { useTranslation } from "react-i18next"
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text"
import { CustomInput } from "shared/ui/CstmInpt/CustomInput"
import { ProfileUser } from "entyes/Profile/model/types/profile"
import Loader from "shared/ui/Loader/Loader"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { CurrencySelect } from "entyes/Currency/ui/CurrencyCard/CurrencySelect"
import { Currency } from "entyes/Currency"
import { Country, CountrySelect } from "entyes/Country"

export interface ProfileCardProps{
    className?: string
    data?:ProfileUser
    error?:string
    loading?:boolean
    OnChangeFirstName?:(value?:string)=>void
    OnChangeLastName?:(value?:string)=>void
    OnChangeCity?:(value?:string)=>void
    OnChangeAge?:(value?:string)=>void
    OnChangeAvatar?:(value?:string)=>void
    OnChangeUserName?:(value?:string)=>void
    OnChangeCurrency?:(currency?:Currency)=>void
    OnChangeCountry?:(country?:Country)=>void
    readonly?:boolean
 }



export const ProfileCard = (props:ProfileCardProps) =>  {
    const { data,
            className,
            error,
            readonly,
            OnChangeFirstName,
            OnChangeLastName,
            OnChangeCity,
            OnChangeAge,
            OnChangeAvatar,
            OnChangeUserName,
            OnChangeCurrency,
            OnChangeCountry,
            loading} = props
    
    const {t} = useTranslation()
    
   if(loading){
    return(
           <div className={classNames(cls.ProfileCard,{},[className,cls.loading])}>

                                 <Loader/>

                </div>
   )}
   if(error){
    return(
        <div className={classNames(cls.ProfileCard,{},[className,cls.error])}>
               
                    <Text theme={TextTheme.ERROR}  
                          title={t("An error occured")   || ""} 
                          text={t("Try again")   || ""} 
                          align = {TextAlign.CENTER}/>
                                 

                    </div>
   )}

   const mods:Mods = {
    [cls.editing]:!readonly
   }
   
   

    return (
        <div className={classNames(cls.ProfileCard,mods,[className])}>
                <div className={cls.data}>

                    {data?.avatar && (<div className={cls.avatarWrapper}>
                                            <Avatar src={data?.avatar}/>
                                        </div>
                                      )
                    }
                    <CustomInput value={data?.first}
                                 placeholder={t("Name") || "Name"}
                                 className={cls.input}
                                 onChange={OnChangeFirstName}
                                 readonly =  {readonly}/>
                    <CustomInput value={data?.lastname}
                                 placeholder={t("Last Name") || "Lastname"}
                                 className={cls.input}
                                 onChange={OnChangeLastName}
                                 readonly =  {readonly} />
                    <CustomInput value={data?.age}
                                 placeholder={t("Age") || "Age"}
                                 className={cls.input}
                                 onChange={OnChangeAge}
                                 readonly = {readonly} />
                    <CustomInput value={data?.city}
                                 placeholder={t("City") || "City"}
                                 className={cls.input}
                                 onChange={OnChangeCity}
                                 readonly = {readonly} />
                    <CustomInput value={data?.username}
                                 placeholder={t("Username") || "Username"}
                                 className={cls.input}
                                 onChange={OnChangeUserName}
                                 readonly = {readonly} />
                    <CustomInput 
                                 placeholder={t("Link for Avatar") || "Avatar"}
                                 className={cls.input}
                                 onChange={OnChangeAvatar}
                                 readonly = {readonly} />
                    
                   { data?.currency && <CurrencySelect     
                                       className={cls.input}
                                       value={data?.currency} 
                                       onChange={OnChangeCurrency}
                                       readonly = {readonly} />
                }
                {data?.country && <CountrySelect 
                                       className={cls.input}
                                       value={data?.country} 
                                       onChange={OnChangeCountry}
                                       readonly = {readonly} />}
                    </div>
        </div>
    )


}