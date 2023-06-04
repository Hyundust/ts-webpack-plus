// Importing necessary modules and libraries
import { classNames } from 'shared/lib/classNames/classNames'
import cls from "./ErrorPage.module.scss"
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

// Defining the props interface for the ErrorPage component
interface ErrorPageProps {
  className?: string // optional className property for ErrorPage component that can accept a string
}

// Defining a stateless functional component called ErrorPage that uses destructuring to get its className parameter
export const ErrorPage = ({ className }: ErrorPageProps) => {
    
    // Using the 'useTranslation' hook from the react-i18next library to set up internationalization and translation capabilities
    const {t} = useTranslation();

    // Defining function ReloadPage that reloads the current page when triggered
    const ReloadPage = () =>{
        window.location.reload();
    }

    // Render the component with a div containing the ErrorPage class defined in ErrorPage.module.scss along with any additional CSS classes passed via the className prop.
    // Within this div is a paragraph with the text "Unexpected error" which is translated based on the current language.
    // Also within this div, there's a Button component that calls the ReloadPage function when clicked and whose text is translated based on the current language.
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t("Unexpected error")}</p>
            <Button onClick={ReloadPage}>{t("Refresh Page")}</Button>
        </div>
    )
}
