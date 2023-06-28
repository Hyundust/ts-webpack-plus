import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ProfilePageHeader.module.scss"
import { useTranslation } from "react-i18next"
import { Text } from "shared/ui/Text/Text"
import { Button,ThemeButton } from "shared/ui/Button/Button"
import { useSelector } from "react-redux"
import { getProfileReadOnly } from "entyes/Profile/model/selector/getProfileReadOnly/getProfileReadOnly"
import { useCallback } from "react"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { profileActions, updateProfileData } from "entyes/Profile"

export interface ProfilePageHeaderProps{
    className?: string
 }



export const ProfilePageHeader = ({className}:ProfilePageHeaderProps) =>  {

    const {t} = useTranslation()
    const readonly = useSelector(getProfileReadOnly)
    const dispatch = useAppDispatch();


    const onEdit = useCallback(()=>{
        dispatch(profileActions.setReadOnly(false))
    },[dispatch])


    const onCancelEdit = useCallback(()=>{
        dispatch(profileActions.cancelEditToServer())
    },[dispatch])

    const onSave = useCallback(()=>{
        dispatch(updateProfileData())
    },[dispatch])

    return (
        <div className={classNames(cls.ProfilePageHeader,{},[className])}>
                
                        <Text title={t("User Profile") || "User Profile"}/>
                         {readonly  ?(<Button onClick={onEdit}
                                        theme={ThemeButton.OUTLINE}
                                        className={cls.editBtn}>
                                                {t("Edit")}
                                    </Button>)
                            
                        :            (<>
                                                <Button onClick={onCancelEdit}
                                                            theme={ThemeButton.CONFIRM_RED}
                                                            className={cls.editBtn}>
                                                            {t("Cancel")}
                                                </Button>
                                                <Button onClick={onSave}
                                                            theme={ThemeButton.CONFIRM_GREEN}
                                                            className={cls.editBtn}>
                                                            {t("Save")}
                                                </Button>
                                    </>


                        )
                        
                        }
                            
                
        </div>
    )


}