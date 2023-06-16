// Import required modules
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { AppLink,AppLinkTheme  } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from "../../../shared/assets/icons/about-20-20.svg"
import MainIcon from "../../../shared/assets/icons/main-20-20.svg"


// Define the type of props for the SideBar component
interface SideBarProps {
  className?: string
}

// Export the SideBar component
export const SideBar = ({ className }: SideBarProps) => {
    // Declare state variable using the `useState` hook and set its initial value as `false`
    const [collapsed, setCollapsed] = useState(false)

    // Define a function that toggles the value of `collapsed` when called
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    // Render the SideBar component using JSX
    return (
        <div
            data-testid={"sidebar"}
            // Concatenate CSS classes using the `classNames` utility function. 
            // The `cls.sidebar` class is always applied while `cls.collapsed` class is only applied if `collapsed` is true.
            // Additional CSS classes passed via the `className` prop are also added to the div element if it is defined.
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            {/*Render a button with text "Toggle" that calls the `onToggle` function on click*/}
            <Button data-testid={"sidebar-toggle"}
                    onClick={onToggle}
                    className  = {cls.collapsedBtn}
                    theme= {ThemeButton.BACKGROUND_INVERTED}
                    squared
                    size={SizeButton.XL}>
                       
                    {collapsed ? ">" : "<"} 
            </Button>
                
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.item} to={RoutePath.main}>
                            <MainIcon  className={cls.icon}/>
                                <span className={cls.link} >
                                        Main Page
                                </span>
                </AppLink> {/* A link to the home page */}
            
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.item} to={RoutePath.about}>
                     <AboutIcon className={cls.icon}/>
                        <span className={cls.link}>
                                About Page 
                        </span>
                    
                </AppLink> {/* A link to the about page */}
           
            {/*Render a div with class `switchers` which contains two components `ThemeSwitcher` and `LangSwitcher`*/}
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                {/*Pass an additional `className` prop to the `LangSwitcher` component to apply specific styles*/}
                <LangSwitcher short = {collapsed} className={cls.lang}/>
            </div>

        </div>
    )
}