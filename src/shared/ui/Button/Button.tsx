// Importing required modules and libraries
import { classNames } from 'shared/lib/classNames/classNames' // classNames utility function for adding multiple classes to className attribute
import cls from './Button.module.scss' // CSS module containing class names for this component
import { type ButtonHTMLAttributes, type FC } from 'react' // ButtonHTMLAttributes interface and FC type from React library for defining a functional component

// Defining an enum called ThemeButton which contains CLEAR as a property with value "clear"
export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted" 

}
export enum SizeButton{
    L= "size_l",
    M= "size_m",
    XL= "size_xl",

}

// Defining the interface for ButtonProps which extends the ButtonHTMLAttributes interface of HTMLButtonElement
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Optional className attribute of type string
    className?: string
    // Optional theme attribute of type ThemeButton enum
    theme?: ThemeButton
    //option for button to be squared
    squared?:boolean

    size?:SizeButton
}

// Defining the functional component Button which takes in ButtonProps as its props
export const Button: FC<ButtonProps> = (props) => {
    // Extracting required props from ButtonProps object
    const { className,
            children,
            theme,
            squared,
            size = SizeButton.M,
            ...otherProps } = props

    const mods:Record<string,boolean> = {
        [cls[theme]]:true,
        [cls.squared]:squared,
        [cls[size]]:true

    }

    // Rendering a button element with appropriate classes using classNames utility function
    return (
        <button
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
            
        >
            {/* Rendering the child elements of Button */}
            {children}
        </button>
    )
}
