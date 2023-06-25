import cls from "./SidebarItem.module.scss"
import { useTranslation } from "react-i18next"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { SideBarItemType } from "widgets/SideBar/model/items"
import { memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"

export interface LoginFormProps{
   items?:SideBarItemType
   collapsed:boolean
 }



export const SideBarItem= memo(({items,collapsed}:LoginFormProps) =>  {

    const {t} = useTranslation()

   

    return (
        <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.item,{[cls.collapsed]:collapsed})} to={items.path}>
        <items.Icon className={cls.icon}/>
           <span className={cls.link}>
                   {t(items.text)}
           </span>
       
   </AppLink> 
    )


})