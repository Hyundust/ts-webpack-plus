import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Profile.module.scss"
import { useTranslation } from "react-i18next"
import { ModuleLoad, ReducerList } from "shared/lib/components/ModLoader/ModuleLoader"
import { profileReducer } from "../model/slice/profileSlice"

export interface ProfileProps{
    className?: string
 }
 const reducers:ReducerList= {
    profile: profileReducer
 }



export const Profile = ({className}: ProfileProps) =>  {

    const {t} = useTranslation()

   

    return (
        <ModuleLoad reducers={reducers} removeAfterUnMount>
            <div className={classNames(cls.Profile,{},[className])}>

            </div>
        </ModuleLoad>
        
    )


}