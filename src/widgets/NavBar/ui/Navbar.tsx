// Importing required modules and libraries
import { classNames } from 'shared/lib/classNames/classNames' // classNames utility function for adding multiple classes to className attribute
import cls from './NavBar.module.scss' // CSS module containing class names for this component
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'

import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'

// Declaring the required interface props for the Navbar component
interface NavBarProps {
    className?: string
}

// Defining the Navbar functional component with destructured props
export const Navbar = ({ className }: NavBarProps) => {
    const {t} = useTranslation();
    const [isAuthModal,setAuthModal] = useState(false);

    const onCloseModal = useCallback(()=>{
        setAuthModal(!isAuthModal);
    },[isAuthModal])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}> {/* Defining the className prop as a combination of classes using the classNames function */}
            <Button onClick= {onCloseModal} 
                    theme = {ThemeButton.CLEAR_INVERTED}   
                    className={cls.links}>

                        {t("Log in")}

            </Button>
            <LoginModal isOpen= {isAuthModal} onClose={onCloseModal}/>
        </div>
    )
}
