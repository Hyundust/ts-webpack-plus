
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import { CustomInput } from "shared/ui/CstmInpt/CustomInput"

export interface LoginFormProps{
        className?:string
 }



export const LoginForm = ({className}:LoginFormProps) =>  {

    const {t} = useTranslation()

   

    return (
        <div className={classNames(cls.LoginForm,{},[className,])}>
            <CustomInput className={cls.input}/>
            <CustomInput className={cls.input}/>
            <Button className={cls.LogButton}>
                {t("Log in")}
            </Button>

        </div>
    )


}
