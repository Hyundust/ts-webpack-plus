import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SidebarItem.module.scss"
import { useTranslation } from "react-i18next"
import AboutIcon from "../../../../shared/assets/icons/about-20-20.svg"
import MainIcon from "../../../../shared/assets/icons/main-20-20.svg"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { SideBarItemType } from "widgets/SideBar/model/items"


export interface LoginFormProps{
   items?:SideBarItemType
   collapsed:boolean
 }



export const SideBarItem= ({items,collapsed}:LoginFormProps) =>  {

    const {t} = useTranslation()

   

    return (
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.item} to={items.path}>
        <items.Icon className={cls.icon}/>
           <span className={cls.link}>
                   {t(items.text)}
           </span>
       
   </AppLink> 
    )


}