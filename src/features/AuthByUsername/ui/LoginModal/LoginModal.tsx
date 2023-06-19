import { Modal } from "widgets/ModalWindow"
import cls from "./LoginModal.module.scss"
import { classNames } from "shared/lib/classNames/classNames"
import { LoginForm } from "../LoginForm/LoginForm"

export interface LoginModalProps{
   className?:string
   isOpen:boolean,
   onClose:()=>void
 }



export const LoginModal = ({className,isOpen,onClose}:LoginModalProps) =>  {

   


   

    return (
        <Modal className={classNames(cls.LoginForm,{},[className])}
                isOpen = {isOpen}
                onClose={onClose}>
            <LoginForm/>
        </Modal>
    )


}
