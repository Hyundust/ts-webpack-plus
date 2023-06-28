import { Mods, classNames } from "shared/lib/classNames/classNames"
import cls from "./Avatar.module.scss"
import { useTranslation } from "react-i18next"
import { useMemo } from "react"

export interface AvatarProps{
    className?:string
    src?:string
    size?:number
    alt?:string
 }



export const Avatar = ({className,src,size,alt}:AvatarProps) =>  {

    const styles = useMemo(()=>{
        return {
            width:size || 100,
            height:size || 100
        }
    },[size])
   
    const mods:Mods = {}
    return (
        <img src={src} alt={alt} style = {styles} className={classNames(cls.Avatar, mods, [className])}/>
    )


}