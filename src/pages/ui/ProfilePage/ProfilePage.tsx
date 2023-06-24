import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ProfilePage.module.scss"
import { useTranslation } from "react-i18next"

export interface LoginFormProps{
   className?: string;
 }



export const ProfilePage = ({className}:LoginFormProps) =>  {

    const {t} = useTranslation()

   

    return (
        <div className={classNames(cls.ProfilePage,{},[className])}>
            {t("Profile Page")}
        </div>
    )


}