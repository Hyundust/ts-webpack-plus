// Importing required modules and libraries
import { classNames } from 'shared/lib/classNames/classNames' // classNames utility function for adding multiple classes to className attribute
import cls from './NavBar.module.scss' // CSS module containing class names for this component
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'

import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData, userActions } from 'entyes/User'

// Declaring the required interface props for the Navbar component
interface NavBarProps {
    className?: string
}

// Defining the Navbar functional component with destructured props
export const Navbar = ({ className }: NavBarProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const [isAuthModal,setAuthModal] = useState(false);

    const AuthData = useSelector(getUserData);

    const onCloseModal = useCallback(()=>{
        setAuthModal(false);
    },[isAuthModal])

    const onShowModal = useCallback(()=>{
        setAuthModal(true);
    },[isAuthModal])
    const onLogOut = useCallback(()=>{
        dispatch(userActions.logout());
    },[isAuthModal])

    if(AuthData){
        return (        
                <div className={classNames(cls.Navbar, {}, [className])}> {/* Defining the className prop as a combination of classes using the classNames function */}
                    <Button onClick= {onLogOut} 
                            theme = {ThemeButton.CLEAR_INVERTED}   
                            className={cls.links}
                            >

                                {t("Log out")}

                    </Button>
                    
                </div>
        
        )
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}> {/* Defining the className prop as a combination of classes using the classNames function */}
            <Button onClick= {onShowModal} 
                    theme = {ThemeButton.CLEAR_INVERTED}   
                    className={cls.links}>

                        {t("Log in")}

            </Button>
            <LoginModal isOpen= {isAuthModal} onClose={onCloseModal}/>
        </div>
    )
}
