import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ProfileCard.module.scss"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getProfileData } from "entyes/Profile/model/selector/getProfileData/getProfileData"
import { getProfileError } from "entyes/Profile/model/selector/getProfileError/getProfileError"
import { getProfileLoading } from "entyes/Profile/model/selector/getProfileLoading/getProfileLoading"
import { Text } from "shared/ui/Text/Text"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { CustomInput } from "shared/ui/CstmInpt/CustomInput"

export interface ProfileCardProps{
    className?: string
 }



export const ProfileCard = ({className}:ProfileCardProps) =>  {

    const {t} = useTranslation("profile")
    const data  = useSelector(getProfileData);
    const error  = useSelector(getProfileError);
    const loading = useSelector(getProfileLoading)
   

    return (
        <div className={classNames(cls.ProfileCard,{},[className])}>
                <div className={cls.header}>
                        <Text title={t("User Profile") || "User Profile"}/>
                            <Button 
                                    theme={ThemeButton.OUTLINE}
                                    className={cls.editBtn}>
                                {t("Edit")}
                            </Button>
                </div>
                <div className={cls.data}>
                    <CustomInput value={data?.first}
                                 placeholder={t("Name") || "Name"}
                                 className={cls.input}/>
                    <CustomInput value={data?.lastname}
                                 placeholder={t("Last Name") || "Lastname"}
                                 className={cls.input}/>

                </div>
        </div>
    )


}