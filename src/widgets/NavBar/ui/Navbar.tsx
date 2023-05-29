import { classNames } from 'shared/lib/classNames/classNames'
import cls from "./NavBar.module.scss"
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'


interface NavBarProps {
    className?:string
}


export const Navbar = ({className}:NavBarProps) =>{
  return (
    <div className={classNames(cls.Navbar,{},[className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to= {"/"}>Main Page</AppLink> {/* A link to the home page */}
            <AppLink theme={AppLinkTheme.SECONDARY} to = {"/about"}>AboutPage</AppLink> {/* A link to the about page */}

        </div>
    </div>
  )
}

