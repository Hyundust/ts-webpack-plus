// Importing required modules and libraries
import { classNames } from 'shared/lib/classNames/classNames' // classNames utility function for adding multiple classes to className attribute
import cls from './Modal.module.scss' // CSS module containing class names for this component
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from 'widgets/Portal/Portal'

// Declaring the required interface props for the Navbar component
interface ModalProps {
    className?: string
    children?:ReactNode
    isOpen?:boolean
    onClose?:()=>void

}
const ANIMATION_DELAY = 300;

// Defining the Navbar functional component with destructured props
export const Modal= ( props : ModalProps) => {
    const {className,
            children,
            isOpen,
            onClose}= props

    const [isClosing,setIsClosing] = useState(false);

    
    // Object containing the CSS classes to apply to the modal element based on its state

    const mods :Record<string , boolean> = {
        [cls.isOpened]:isOpen,
        [cls.isClosing]:isClosing
    }



    // Ref to store the ID returned by setTimeout
    const timerRef = useRef<ReturnType<typeof setTimeout>>();


    // Function to close the modal

    const closeHandler = useCallback(() => {
        if(onClose){
            setIsClosing(true);
            timerRef.current = setTimeout(()=>{
                onClose();
                setIsClosing(false)

            },ANIMATION_DELAY)
        }
    } , [onClose]);

    const onKeyDown = useCallback((e:KeyboardEvent) =>{
        if(e.key === "Escape"){
            closeHandler();
        }
    },[closeHandler ])

    // Add event listener to window for keydown events when modal is open

    useEffect(()=>{
        if(onClose){
            window.addEventListener("keydown",onKeyDown)

        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener("keydown",onKeyDown)
        }
    },[isOpen,onKeyDown])


    // Callback function to prevent event propagation when clicking inside the modal content

    const onContentClick =useCallback((e:React.MouseEvent)=>{
        e.stopPropagation();
    },[])
    


    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}> {/* Defining the className prop as a combination of classes using the classNames function */}
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} 
                            onClick ={onContentClick} >
                        {children}  
                    </div>
                </div>
            </div>
        </Portal>
    )
}
