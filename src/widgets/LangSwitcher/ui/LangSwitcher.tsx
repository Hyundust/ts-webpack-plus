// Importing necessary modules and libraries
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { sumBy } from 'lodash'

// Defining the props interface for the LangSwitcher component
interface LangSwitcherProps {
  className?: string // optional className property for LangSwitcher component that can accept a string
  short?:boolean
}

// Defining a stateless functional component called LangSwitcher that uses destructuring to get its className parameter
export const LangSwitcher = ({ className,short }: LangSwitcherProps) => {

    // Using the 'useTranslation' hook from the react-i18next library to set up internationalization and translation capabilities
    const { t, i18n } = useTranslation()

    // Defining a function called 'Toggle' using the async function syntax, which toggles between two language settings; 
    // either 'en' (English) or 'pl' (Polish)
    const Toggle = async () => {
        i18n.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl')
    }

    // Render the component with a Button that calls the 'Toggle' function on click. The button's text is translated based 
    // on the current language.
    return (
        <Button theme={ThemeButton.CLEAR}
            onClick={Toggle}
            className={classNames("", {}, [className])}>
            {t( short? "Short" :'Language')}
        </Button>
    )
}
