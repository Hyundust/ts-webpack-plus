
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss"
import { useTranslation } from "react-i18next"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { CustomInput } from "shared/ui/CstmInpt/CustomInput"
import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import { getLoginState } from "features/AuthByUsername/model/selectors/selectLoginState"
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice"
import { loginByUsername } from "features/AuthByUsername/model/services/LoginByUsername/LoginByUsername"
import { Text, TextTheme } from "shared/ui/Text/Text"
import i18n from "shared/config/i18n/i18n"





export interface LoginFormProps{
        className?:string
 }



export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isError, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
      }, [dispatch, username, password]);
      

    return (
        
        <div className={classNames(cls.LoginForm,{},[className,])}>
            <div className={cls.Header} >{t("Log in into your account")}</div>
            {isError && <Text text={t('Something went wrong.Try again')} theme={TextTheme.ERROR}/>}
            <CustomInput 
                        className={cls.input}
                        placeholder={t("Username")}
                        autofocus
                        onChange = {onChangeUsername}
                        value = {username}
            />
            <CustomInput 
                        className={cls.input}
                        placeholder={t("Password")}
                        onChange = {onChangePassword}
                        value = {password}
                        
            />
            <Button theme={ThemeButton.OUTLINE} className={cls.LogButton} onClick={onLoginClick} disabled = {isLoading}>
                {t("Log in")}   
            </Button>

        </div>
    )


}
