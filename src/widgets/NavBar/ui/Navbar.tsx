// Importing required modules and libraries
import { classNames } from 'shared/lib/classNames/classNames' // classNames utility function for adding multiple classes to className attribute
import cls from './NavBar.module.scss' // CSS module containing class names for this component
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

// Declaring the required interface props for the Navbar component
interface NavBarProps {
    className?: string
}

// Defining the Navbar functional component with destructured props
export const Navbar = ({ className }: NavBarProps) => {

    return (
        <div className={classNames(cls.Navbar, {}, [className])}> {/* Defining the className prop as a combination of classes using the classNames function */}
            <div className={cls.links}>
            
            </div>
        </div>
    )
}
