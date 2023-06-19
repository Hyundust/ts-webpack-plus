// Import required modules and types
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./CustomInput.module.scss"
import {InputHTMLAttributes, memo, useState } from "react"

// Define a new type that removes 'value' and 'onChange' properties from InputHTMLAttributes<HTMLInputElement>
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,"value" | "onChange">

// Define an interface extending HTMLInputProps, adding optional 'className' and 'onChange' properties
interface CustomProps extends HTMLInputProps{
    className?:string
    value?:string
    onChange?:(value:string)=>void;
 }

 // Memoized functional component 'CustomInput', which takes in an object of custom props of type 'CustomProps'
export const CustomInput = memo((props:CustomProps) =>  {
    // Destructure relevant properties and spread remaining props to a new object
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        ...otherProps
            } = props
    
    // Event handler function called when input changes, calling onChange callback if it exists with input value
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
            onChange?.(e.target.value)
    }
    const [isFocused,setIsFocused] = useState(false);
    const onBlur = ()=>{
        setIsFocused(false);
    }
    const onFocused = ()=>{ 
        setIsFocused(true);
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
                        <input className = {cls.input}
                            type = {type}
                            value = {value}
                            onChange={onChangeHandler}
                            {...otherProps}
                            onFocus={onFocused}
                            onBlur={onBlur}
                        />
                        {isFocused && (
                                        <span className={cls.caret}/>
                                    )}
                    </div>
        </div>
    )
})
