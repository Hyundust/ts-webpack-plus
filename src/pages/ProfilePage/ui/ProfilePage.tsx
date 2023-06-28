import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { ModuleLoad, ReducerList } from "shared/lib/components/ModLoader/ModuleLoader"
import { profileActions, profileReducer } from "entyes/Profile"
import { ProfileCard } from "entyes/Profile"
import { useSelector } from "react-redux"
import { getProfileData } from "entyes/Profile/model/selector/getProfileData/getProfileData"
import { getProfileError } from "entyes/Profile/model/selector/getProfileError/getProfileError"
import { getProfileLoading } from "entyes/Profile/model/selector/getProfileLoading/getProfileLoading"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { fetchProfileData } from "entyes/Profile"
import { useCallback, useEffect } from "react"
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader"
import { getProfileReadOnly } from "entyes/Profile/model/selector/getProfileReadOnly/getProfileReadOnly"
import { getProfileForm } from "entyes/Profile/model/selector/getProfileForm/getProfileReadOnly"
import { Currency } from "entyes/Currency"
import { Country } from "entyes/Country"

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
        dispatch(fetchProfileData());
    }, [dispatch]);

    const formData  = useSelector(getProfileForm);
    const error  = useSelector(getProfileError);
    const loading = useSelector(getProfileLoading)
    const readonly = useSelector(getProfileReadOnly)
    


    const OnChangeFirstName =useCallback((value?:string) =>{
        dispatch(profileActions.updateProfile({first:value || ""}))
    },[dispatch])

    const OnChangeLastName =useCallback((value?:string) =>{
        dispatch(profileActions.updateProfile({lastname:value || ""}))
    },[dispatch])

    const OnChangeAge =useCallback((value?: string) =>{
        dispatch(profileActions.updateProfile({age:Number(value || 0)}))
    },[dispatch])

    const OnChangeCity = useCallback((value?:string) =>{
        dispatch(profileActions.updateProfile({city:value || ""}))
    },[dispatch])
    
    const OnChangeUserName = useCallback((value?:string) =>{
        dispatch(profileActions.updateProfile({username:value || ""}))
    },[dispatch])
    
    const OnChangeAvatar = useCallback((value?:string) =>{
        dispatch(profileActions.updateProfile({avatar:value || ""}))
    },[dispatch])

    const OnChangeCurrency = useCallback((currency?:Currency) =>{
        dispatch(profileActions.updateProfile({currency}))
    },[dispatch])

    const OnChangeCountry = useCallback((country?:Country) =>{
        dispatch(profileActions.updateProfile({country}))
    },[dispatch])

   
    return (
        <ModuleLoad reducers={reducers} removeAfterUnMount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
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
