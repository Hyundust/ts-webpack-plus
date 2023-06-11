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

// Defining the interface for ButtonProps which extends the ButtonHTMLAttributes interface of HTMLButtonElement
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Optional className attribute of type string
    className?: string
    // Optional theme attribute of type ThemeButton enum
    theme?: ThemeButton
}

// Defining the functional component Button which takes in ButtonProps as its props
export const Button: FC<ButtonProps> = (props) => {
    // Extracting required props from ButtonProps object
    const { className, children, theme, ...otherProps } = props

    // Rendering a button element with appropriate classes using classNames utility function
    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme ?? '']])}
            {...otherProps}
        >
            {/* Rendering the child elements of Button */}
            {children}
        </button>
    )
}
