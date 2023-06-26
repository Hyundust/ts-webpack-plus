import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ProfilePage.module.scss"
import { useTranslation } from "react-i18next"
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch";
import { ProfileCard, fetchProfileData } from "entyes/Profile";

export interface LoginFormProps{
   className?: string;
 }



export const ProfilePage = ({className}:LoginFormProps) =>  {

    const {t} = useTranslation()
    const dispatch = useAppDispatch()
   useEffect(()=>{
    dispatch(fetchProfileData())

   },[dispatch])

    return (
        <div className={classNames(cls.ProfilePage,{},[className])}>
            <ProfileCard/>
        </div>
    )


}