// Import required modules and types
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./CustomInput.module.scss"
import {InputHTMLAttributes, memo, useEffect, useRef, useState } from "react"

// Define a new type that removes 'value' and 'onChange' properties from InputHTMLAttributes<HTMLInputElement>
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,"value" | "onChange">

// Define an interface extending HTMLInputProps, adding optional 'className' and 'onChange' properties
interface CustomProps extends HTMLInputProps{
    className?:string
    value?:string
    onChange?:(value:string)=>void
    autofocus?:boolean
 }

 // Memoized functional component 'CustomInput', which takes in an object of custom props of type 'CustomProps'
export const CustomInput = memo((props:CustomProps) =>  {
    // Destructure relevant properties and spread remaining props to a new object
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder = "",
        autofocus,
        ...otherProps
            } = props

    const [isFocused,setIsFocused] = useState(false);
    const [caretPosition,setCaretPosition] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null);
    
    // Event handler function called when input changes, calling onChange callback if it exists with input value
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
            onChange?.(e.target.value);
            setCaretPosition(e.target.value.length)

    }
    useEffect(()=>{
        if(autofocus){
            setIsFocused(true);
            inputRef.current?.focus();
        }
    },[autofocus])
    

    

    const onBlur = ()=>{
        setIsFocused(false);
    }
    const onFocused = ()=>{ 
        setIsFocused(true);
    }
    const onSelect = (e: any) => {
            setCaretPosition(e?.target?.selectionStart || 0)
    }
        


   // Render div with given classes, containing input field with appropriate attributes, and other props passed down
    return (
        <div className={classNames(cls.inputWrapper,{},[className])}>
                    {placeholder && (
                                    <div className={cls.placeholder}>
                                            {`${placeholder}>`}
                                    </div>
                    )}

                    <div className={cls.caretWrapper}>
                        <input 
                            ref={inputRef}
                            className = {cls.input}
                            type = {type}
                            value = {value}
                            onChange={onChangeHandler}
                            onFocus={onFocused}
                            onBlur={onBlur}
                            onSelect={onSelect}
                            {...otherProps}
                        />
                        {isFocused && (
                                        <span 
                                                className={cls.caret}
                                                style={{left:`${caretPosition*9}px`}}

                                                
                                                
                                                
                                        
                                        />
                                    )}
                    </div>
        </div>
    )
})
