import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { ModuleLoad, ReducerList } from "shared/lib/components/ModLoader/ModuleLoader"
import { profileActions, profileReducer } from "entyes/Profile"
import { ProfileCard } from "entyes/Profile"
import { useSelector } from "react-redux"
import { getProfileError } from "entyes/Profile/model/selector/getProfileError/getProfileError"
import { getProfileLoading } from "entyes/Profile/model/selector/getProfileLoading/getProfileLoading"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { fetchProfileData } from "entyes/Profile"
import { useCallback, useEffect } from "react"
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader"
import { getProfileReadOnly } from "entyes/Profile/model/selector/getProfileReadOnly/getProfileReadOnly"
import { getProfileForm } from "entyes/Profile/model/selector/getProfileForm/getProfileForm"
import { Currency } from "entyes/Currency"
import { Country } from "entyes/Country"
import { getProfileValidateError } from "entyes/Profile/model/selector/getProfileValidateError/getProfileValidateError"
import { TextTheme } from "shared/ui/Text/Text"
import { Text } from "shared/ui/Text/Text"

import { ValidateProfileError } from "entyes/Profile/model/types/profile"


export interface ProfileProps{
    className?: string
 }
 const reducers:ReducerList= {
    profile: profileReducer
 }



const ProfilePage = ({className}: ProfileProps) =>  {




    const {t} = useTranslation()
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(__PROJECT__!== "storybook"){
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const formData  = useSelector(getProfileForm);
    const error  = useSelector(getProfileError);
    const loading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadOnly);
    const profileErrors = useSelector(getProfileValidateError)
    
    const validateErrorTranslates = {
        [ValidateProfileError .SERVER_ERROR]: t('SERVER ERROR'),
        [ValidateProfileError.INCORRECT_USER_COUNTRY]: t('Wrong region'),
        [ValidateProfileError.NO_DATA]: t('There is no data'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('You must provide name and surname'),
        [ValidateProfileError.INCORRECT_USER_AGE]: t('Incorrect age'),
    };


    const OnChangeFirstName =useCallback((value?:string) =>{
        dispatch(profileActions.updateProfile({first:value}))
    },[dispatch])

    const OnChangeLastName =useCallback((value?:string) =>{
        dispatch(profileActions.updateProfile({lastname:value}))
    },[dispatch])

    const OnChangeAge =useCallback((value?: string) =>{
        dispatch(profileActions.updateProfile({age:Number(value)}))
    },[dispatch])

    const OnChangeCity = useCallback((value?:string) =>{
        dispatch(profileActions.updateProfile({city:value}))
    },[dispatch])
    
    const OnChangeUserName = useCallback((value?:string) =>{
        dispatch(profileActions.updateProfile({username:value }))
    },[dispatch])

    const OnChangeAvatar = useCallback((value?:string) =>{
        dispatch(profileActions.updateProfile({avatar:value}))
    },[dispatch])

    const OnChangeCurrency = useCallback((currency?:Currency) =>{
        dispatch(profileActions.updateProfile({currency}))
    },[dispatch])

    const OnChangeCountry = useCallback((country?:Country) =>{
        dispatch(profileActions.updateProfile({country}))
    },[dispatch])

   console.log(profileErrors)
    return (
        <ModuleLoad reducers={reducers} removeAfterUnMount>
            <div className={classNames('', {}, [className])}>

                <ProfilePageHeader/>
                {profileErrors?.length && profileErrors.map((err)=>(
                        <Text key={err} theme = {TextTheme.ERROR} text = {validateErrorTranslates[err]}/>
                ))}
                <ProfileCard data = {formData} 
                             loading = {loading} 
                             error = {error} 
                             readonly = {readonly}
                             OnChangeFirstName ={OnChangeFirstName}
                             OnChangeLastName ={OnChangeLastName}
                             OnChangeCity={OnChangeCity}
                             OnChangeAge={OnChangeAge}
                             OnChangeAvatar={OnChangeAvatar}
                             OnChangeUserName = {OnChangeUserName}
                             OnChangeCurrency = {OnChangeCurrency }
                             OnChangeCountry={OnChangeCountry}
                             />
            </div>
        </ModuleLoad>
        
    )


}
export default ProfilePage;
