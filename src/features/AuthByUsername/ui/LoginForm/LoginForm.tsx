
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./LoginForm.module.scss"
import { useTranslation } from "react-i18next"
import { Button, ThemeButton } from "shared/ui/Button/Button"
import { CustomInput } from "shared/ui/CstmInpt/CustomInput"
import { useSelector } from "react-redux"
import { memo, useCallback,  } from "react"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { loginActions, loginReducer } from "features/AuthByUsername/model/slice/loginSlice"
import { loginByUsername } from "features/AuthByUsername/model/services/LoginByUsername/LoginByUsername"
import { Text, TextTheme } from "shared/ui/Text/Text"
import { getLoginUsername } from "features/AuthByUsername/model/selectors/getLoginUsername/selectLoginUsername"
import { getLoginLoading } from "features/AuthByUsername/model/selectors/getLoginLoading/selectLoginLoading"
import { getLoginIsError } from "features/AuthByUsername/model/selectors/getLoginIsError/selectLoginIsError"
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword/selectLoginPassword"
import { ModuleLoad, ReducerList } from "shared/lib/components/ModLoader/ModuleLoader"



export interface LoginFormProps{
        className?:string
        onSubmit:()=>void;

 }

const initialReducers:ReducerList = {
    loginForm:loginReducer,

}

export const LoginForm = memo(({ className,onSubmit}: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isError = useSelector(getLoginIsError);
    const isLoading=useSelector(getLoginLoading);
    

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async() => {
        const result = await dispatch(loginByUsername({ username, password }));
        if(result.meta.requestStatus === "fulfilled"){
            onSubmit();

        }
      }, [dispatch, username, password,onSubmit]);
      

    return (
        <ModuleLoad reducers={initialReducers}>
                        <div className={classNames(cls.LoginForm,{},[className,])}>
                    <div className={cls.Header} >{t("Log in into your account")}</div>
                    {isError && <Text text={t('Something went wrong.Try again')|| ""} theme={TextTheme.ERROR}/>}
                    <CustomInput 
                                className={cls.input}
                                placeholder={t("Username")|| ""}
                                autofocus
                                onChange = {onChangeUsername}
                                value = {username}
                    />
                    <CustomInput 
                                className={cls.input}
                                placeholder={t("Password")|| ""}
                                onChange = {onChangePassword}
                                value = {password}
                                
                    />
                    <Button theme={ThemeButton.OUTLINE} className={cls.LogButton} onClick={onLoginClick} disabled = {isLoading}>
                        {t("Log in")}   
                    </Button>

                </div>
        </ModuleLoad>
        
    )


}
)
