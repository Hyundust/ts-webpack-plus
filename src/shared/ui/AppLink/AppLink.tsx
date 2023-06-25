// Importing required modules and components
import { Link, type LinkProps } from 'react-router-dom' // Link component from react-router-dom library for creating anchor tags to navigate to different routes
import { classNames } from 'shared/lib/classNames/classNames' // classNames utility function for adding multiple classes to className attribute
import cls from './AppLink.module.scss' // CSS module containing class names for this component
import { memo, type FC } from 'react' // FC type from React library for defining a functional component

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

// Defining the interface for AppLinkProps which extends the LinkProps interface from react-router-dom
interface AppLinkProps extends LinkProps {

    // Optional attributes
    className?: string
    theme?: AppLinkTheme
}

// Defining the functional component AppLink which takes in AppLinkProps as its props
export const AppLink: FC<AppLinkProps> = memo((props) => {
    // Extracting required props from AppLinkProps object
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

    // Rendering a Link component from react-router-dom with additional className and otherProps passed down
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {/* Rendering the child elements of AppLink */}
            {children}
        </Link>
    )
}
)