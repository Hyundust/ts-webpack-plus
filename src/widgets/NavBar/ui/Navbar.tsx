// Importing required modules and libraries
import { classNames } from 'shared/lib/classNames/classNames' // classNames utility function for adding multiple classes to className attribute
import cls from './NavBar.module.scss' // CSS module containing class names for this component
import { Modal } from 'widgets/ModalWindow'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'

// Declaring the required interface props for the Navbar component
interface NavBarProps {
    className?: string
}

// Defining the Navbar functional component with destructured props
export const Navbar = ({ className }: NavBarProps) => {
    const {t} = useTranslation();
    const [isAuthModal,setAuthModal] = useState(false);

    const onToggleModal = useCallback(()=>{
        setAuthModal(!isAuthModal);
    },[isAuthModal])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}> {/* Defining the className prop as a combination of classes using the classNames function */}
            <Button onClick= {onToggleModal} 
                    theme = {ThemeButton.CLEAR_INVERTED}   
                    className={cls.links}>

                        {t("Log in")}

            </Button>
            <Modal isOpen={isAuthModal} 
                   onClose={onToggleModal }>
                Note: The --modal-z-index variable used in .Modal is likely also needed in .overlay and .content so that they appear above other elements on the page while the modal is open.
            </Modal>
        </div>
    )
}
