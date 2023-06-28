import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Text.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"

export enum TextTheme{
    PRIMARY = "primary",
    ERROR = "error"
}
export enum TextAlign{
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center"
}
export interface TextProps{
    className?: string, 
    title?:string,
    text?:string
    theme?: TextTheme,
    align?:TextAlign
    
 }




export const Text = memo((props:TextProps) =>  {
    const {
        className,
        title,
        text ,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY
    } = props


   const {t} = useTranslation()

    const Mods = {
        [cls[theme]]:true,
        [cls[align]]:true,
   
    } 
   

    return (
        <div className={classNames(cls.LoginForm,Mods,[className])}>
            {title && <p className={cls.title}>{title}</p>}
           {text && <p className={cls.text}>{text}</p>}
        </div>  
    )


})